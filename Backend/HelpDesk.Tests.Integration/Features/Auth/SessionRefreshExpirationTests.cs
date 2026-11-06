using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.Tests.Integration.Fixtures;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Xunit;

namespace HelpDesk.Tests.Integration.Features.Auth;

[CollectionDefinition(nameof(SessionRefreshExpirationCollection), DisableParallelization = true)]
public sealed class SessionRefreshExpirationCollection
{
}

[Collection(nameof(SessionRefreshExpirationCollection))]
public sealed class SessionRefreshExpirationTests(
    HelpDeskApplicationFactory factory)
        : IClassFixture<HelpDeskApplicationFactory>
{
    [Fact]
    public async Task Should_sync_all_active_refresh_tokens_to_monotonic_session_expiration()
    {
        var now = MillisecondPrecision(DateTimeOffset.UtcNow);

        var userId = await GetTestUserIdAsync();

        var sessionId = Guid.NewGuid();

        var firstToken = CreateRefreshToken(
            userId,
            sessionId,
            "activity-token-first-" + Guid.NewGuid(),
            now.AddMinutes(-2),
            now.AddHours(1));

        var latestToken = CreateRefreshToken(
            userId,
            sessionId,
            "activity-token-latest-" + Guid.NewGuid(),
            now.AddMinutes(-1),
            now.AddHours(1));

        var revokedToken = CreateRefreshToken(
            userId,
            sessionId,
            "activity-token-revoked-" + Guid.NewGuid(),
            now.AddSeconds(-30),
            now.AddHours(1));

        revokedToken.RevokedAt = now.AddSeconds(-10);

        var session = CreateSession(userId, sessionId, now, now.AddHours(1));

        await SeedAsync(session, firstToken, latestToken, revokedToken);

        try
        {
            await using var scope = factory.Services.CreateAsyncScope();

            var repository = scope.ServiceProvider
                .GetRequiredService<IUserSessionRepository>();

            var updatedRows = await repository.UpdateAsync(
                session,
                now,
                TimeSpan.FromDays(7),
                TestContext.Current.CancellationToken);

            Assert.Equal(1, updatedRows);

            await using var verifyScope = factory.Services.CreateAsyncScope();

            var db = verifyScope.ServiceProvider.GetRequiredService<AppDbContext>();

            var persistedSession = await db.UserSessions
                .SingleAsync(
                    x => x.Id == sessionId,
                    TestContext.Current.CancellationToken);

            var activeTokens = await db.RefreshTokens
                .Where(x => x.UserSessionId == sessionId)
                .OrderBy(x => x.CreatedAt)
                .ToListAsync(TestContext.Current.CancellationToken);

            var selectedToken = await verifyScope.ServiceProvider
                .GetRequiredService<IRefreshTokenReader>()
                .GetActiveRefreshTokenAsync(
                    userId,
                    sessionId,
                    now,
                    TestContext.Current.CancellationToken);

            Assert.Equal(now.AddDays(7), persistedSession.ExpiresAt);
            Assert.Equal(2, activeTokens.Count);
            Assert.All(activeTokens, token =>
            {
                Assert.Equal(now.AddDays(7), token.ExpiresAt);
                Assert.Null(token.RevokedAt);
            });
            Assert.Equal(latestToken.Token, selectedToken?.Token);
            Assert.Equal(now.AddDays(7), selectedToken?.ExpiresAt);
        }
        finally
        {
            await DeleteSessionDataAsync(sessionId);
        }
    }

    [Fact]
    public async Task Concurrent_activity_updates_must_not_move_session_expiration_backward()
    {
        var start = MillisecondPrecision(DateTimeOffset.UtcNow);

        var userId = await GetTestUserIdAsync();

        var sessionId = Guid.NewGuid();

        var session = CreateSession(
            userId,
            sessionId,
            start,
            start.AddHours(5));

        await SeedAsync(session);

        try
        {
            var earlierActivity = start.AddHours(1);

            var laterActivity = start.AddHours(2);

            var results = await Task.WhenAll(
                UpdateSessionAsync(session, earlierActivity),
                UpdateSessionAsync(session, laterActivity));

            Assert.All(results, rows => Assert.Equal(1, rows));

            await using var scope = factory.Services.CreateAsyncScope();

            var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            var persistedSession = await db.UserSessions
                .SingleAsync(
                    x => x.Id == sessionId,
                    TestContext.Current.CancellationToken);

            Assert.Equal(laterActivity.AddDays(7), persistedSession.ExpiresAt);
        }
        finally
        {
            await DeleteSessionDataAsync(sessionId);
        }
    }

    [Fact]
    public async Task Concurrent_refresh_rotation_must_preserve_the_winning_token()
    {
        var now = MillisecondPrecision(DateTimeOffset.UtcNow);

        var userId = await GetTestUserIdAsync();

        var sessionId = Guid.NewGuid();

        var otherSessionId = Guid.NewGuid();

        var expiredRecord = CreateRefreshToken(
            userId,
            sessionId,
            "rotation-old-" + Guid.NewGuid(),
            now.AddMinutes(-2),
            now.AddMinutes(-1));

        var unrelatedToken = CreateRefreshToken(
            userId,
            otherSessionId,
            "rotation-other-" + Guid.NewGuid(),
            now.AddMinutes(-1),
            now.AddDays(7));

        var session = CreateSession(userId, sessionId, now, now.AddDays(1));

        var otherSession = CreateSession(userId, otherSessionId, now, now.AddDays(7));

        await SeedAsync(session, expiredRecord);

        await SeedAsync(otherSession, unrelatedToken);

        try
        {
            var replacements = new[]
            {
                CreateRefreshToken(
                    userId,
                    sessionId,
                    "rotation-new-a-" + Guid.NewGuid(),
                    now,
                    now.AddDays(7)),
                CreateRefreshToken(
                    userId,
                    sessionId,
                    "rotation-new-b-" + Guid.NewGuid(),
                    now,
                    now.AddDays(7))
            };

            var outcomes = await Task.WhenAll(
                RotateAsync(expiredRecord.Id, replacements[0], now),
                RotateAsync(expiredRecord.Id, replacements[1], now));

            Assert.Single(outcomes, expiration => expiration is not null);
            Assert.Single(outcomes, expiration => expiration is null);

            await using var scope = factory.Services.CreateAsyncScope();

            var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            var sessionTokens = await db.RefreshTokens
                .IgnoreQueryFilters()
                .Where(x => x.UserSessionId == sessionId)
                .ToListAsync(TestContext.Current.CancellationToken);

            var persistedSession = await db.UserSessions
                .SingleAsync(
                    x => x.Id == sessionId,
                    TestContext.Current.CancellationToken);

            var collateralToken = await db.RefreshTokens
                .SingleAsync(
                    x => x.Id == unrelatedToken.Id,
                    TestContext.Current.CancellationToken);

            Assert.Equal(now.AddDays(7), persistedSession.ExpiresAt);
            Assert.NotNull(sessionTokens.Single(x => x.Id == expiredRecord.Id).RevokedAt);

            var winner = Assert.Single(
                sessionTokens,
                x => x.Id != expiredRecord.Id && x.RevokedAt is null);
            Assert.Equal(persistedSession.ExpiresAt, winner.ExpiresAt);
            Assert.Null(collateralToken.RevokedAt);
        }
        finally
        {
            await DeleteSessionDataAsync(sessionId, otherSessionId);
        }
    }

    private async Task<Guid> GetTestUserIdAsync()
    {
        await using var scope = factory.Services.CreateAsyncScope();

        var db = scope.ServiceProvider.

        GetRequiredService<AppDbContext>();

        return await db.Users
            .Where(x => x.NormalizedUserName == "SUPERADMIN")
            .Select(x => x.Id)
            .SingleAsync(TestContext.Current.CancellationToken);
    }

    private async Task SeedAsync(
        ApplicationUserSession session,
        params ApplicationRefreshToken[] refreshTokens)
    {
        await using var scope = factory.Services.CreateAsyncScope();

        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        db.UserSessions.Add(session);

        db.RefreshTokens.AddRange(refreshTokens);

        await db.SaveChangesAsync(TestContext.Current.CancellationToken);
    }

    private async Task<int> UpdateSessionAsync(
        ApplicationUserSession session,
        DateTimeOffset activityAt)
    {
        await using var scope = factory.Services.CreateAsyncScope();
        return await scope.ServiceProvider
            .GetRequiredService<IUserSessionRepository>()
            .UpdateAsync(
                session,
                activityAt,
                TimeSpan.FromDays(7),
                TestContext.Current.CancellationToken);
    }

    private async Task<DateTimeOffset?> RotateAsync(
        Guid tokenId,
        ApplicationRefreshToken replacement,
        DateTimeOffset now)
    {
        await using var scope = factory.Services.CreateAsyncScope();

        return await scope.ServiceProvider
            .GetRequiredService<IRefreshTokenRepository>()
            .RotateAsync(
                tokenId,
                replacement,
                now,
                TimeSpan.FromDays(7),
                TestContext.Current.CancellationToken);
    }

    private async Task DeleteSessionDataAsync(params Guid[] sessionIds)
    {
        await using var scope = factory.Services.CreateAsyncScope();

        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        var refreshTokens = await db.RefreshTokens
            .IgnoreQueryFilters()
            .Where(x => sessionIds.Contains(x.UserSessionId))
            .ToListAsync(TestContext.Current.CancellationToken);
        db.RefreshTokens.RemoveRange(refreshTokens);

        var sessions = await db.UserSessions
            .IgnoreQueryFilters()
            .Where(x => sessionIds.Contains(x.Id))
            .ToListAsync(TestContext.Current.CancellationToken);
        db.UserSessions.RemoveRange(sessions);

        await db.SaveChangesAsync(TestContext.Current.CancellationToken);
    }

    private static ApplicationUserSession CreateSession(
        Guid userId,
        Guid sessionId,
        DateTimeOffset now,
        DateTimeOffset expiresAt) =>
        new()
        {
            Id = sessionId,
            UserId = userId,
            CreatedAt = now,
            LastActivityAt = now,
            ExpiresAt = expiresAt,
            IsPersistent = true
        };

    private static ApplicationRefreshToken CreateRefreshToken(
        Guid userId,
        Guid sessionId,
        string value,
        DateTimeOffset createdAt,
        DateTimeOffset expiresAt) =>
        new()
        {
            Id = Guid.NewGuid(),
            Token = value,
            UserId = userId,
            UserSessionId = sessionId,
            CreatedAt = createdAt,
            ExpiresAt = expiresAt
        };

    private static DateTimeOffset MillisecondPrecision(DateTimeOffset value) =>
        new(value.Ticks - value.Ticks % TimeSpan.TicksPerMillisecond, TimeSpan.Zero);
}
