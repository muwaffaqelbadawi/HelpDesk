using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;
using HelpDesk.src.Features.Auth.Logout;
using HelpDesk.src.Features.Auth.UserSession.SessionActivity;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Extensions;
using HelpDesk.src.Infrastructure.HttpContexts;
using HelpDesk.src.Infrastructure.Services.UserSession;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.Tests.Integration.Fixtures;
using HelpDesk.Tests.Integration.TestData;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Xunit;

namespace HelpDesk.Tests.Integration.Features.Auth;

public sealed class UserSessionRevocationTests
{
    private const string Issuer = "HelpDesk.UserSession.Tests";
    private const string Audience = "HelpDesk.UserSession.Tests";
    private const string SigningKey = "test-only-signing-key-32-bytes-long";

    [Fact]
    public async Task Should_reject_the_same_access_token_after_logout_revokes_its_session()
    {
        var now = DateTimeOffset.UtcNow;
        var userId = Guid.NewGuid();
        var sessionId = Guid.NewGuid();
        var sessionStore = new InMemoryUserSessionStore(
            userId,
            sessionId,
            now,
            SessionState.Active);
        var executions = new TicketEndpointExecutions();
        await using var app = await CreateAppAsync(
            sessionStore,
            executions,
            userId,
            now);
        using var client = app.GetTestClient();
        var token = CreateAccessToken(userId, sessionId);

        using var firstResponse = await SendAsync(
            client,
            HttpMethod.Get,
            "/me/tickets",
            token);

        Assert.Equal(HttpStatusCode.OK, firstResponse.StatusCode);
        Assert.Equal(1, executions.Count);

        using var logoutResponse = await SendAsync(
            client,
            HttpMethod.Post,
            "/logout",
            token);

        Assert.Equal(HttpStatusCode.OK, logoutResponse.StatusCode);
        Assert.NotNull(sessionStore.RevokedAt);

        using var replayResponse = await SendAsync(
            client,
            HttpMethod.Get,
            "/me/tickets",
            token);

        Assert.Equal(HttpStatusCode.Unauthorized, replayResponse.StatusCode);
        Assert.Equal(1, executions.Count);
    }

    [Fact]
    public async Task Should_not_restore_a_session_when_activity_update_races_with_logout()
    {
        var now = DateTimeOffset.UtcNow;
        var userId = Guid.NewGuid();
        var sessionId = Guid.NewGuid();
        var sessionStore = new InMemoryUserSessionStore(
            userId,
            sessionId,
            now,
            SessionState.Active,
            pauseFirstActivityUpdate: true);
        var executions = new TicketEndpointExecutions();
        await using var app = await CreateAppAsync(
            sessionStore,
            executions,
            userId,
            now);
        using var client = app.GetTestClient();
        var token = CreateAccessToken(userId, sessionId);

        var inFlightRequest = SendAsync(
            client,
            HttpMethod.Get,
            "/me/tickets",
            token);
        await sessionStore.WaitForFirstActivityUpdateAsync();

        try
        {
            using var logoutResponse = await SendAsync(
                client,
                HttpMethod.Post,
                "/logout",
                token);

            Assert.Equal(HttpStatusCode.OK, logoutResponse.StatusCode);
            Assert.NotNull(sessionStore.RevokedAt);
        }
        finally
        {
            sessionStore.ContinueFirstActivityUpdate();
        }

        using var inFlightResponse = await inFlightRequest;
        Assert.Equal(HttpStatusCode.Unauthorized, inFlightResponse.StatusCode);
        Assert.NotNull(sessionStore.RevokedAt);
        Assert.Equal(0, executions.Count);

        using var replayResponse = await SendAsync(
            client,
            HttpMethod.Get,
            "/me/tickets",
            token);

        Assert.Equal(HttpStatusCode.Unauthorized, replayResponse.StatusCode);
        Assert.Equal(0, executions.Count);
    }

    [Theory]
    [InlineData(SessionState.Missing)]
    [InlineData(SessionState.Revoked)]
    [InlineData(SessionState.Expired)]
    [InlineData(SessionState.MissingExpiry)]
    [InlineData(SessionState.FutureRevocation)]
    public async Task Should_reject_requests_for_invalid_user_sessions(
        SessionState state)
    {
        var now = DateTimeOffset.UtcNow;
        var userId = Guid.NewGuid();
        var sessionId = Guid.NewGuid();
        var sessionStore = new InMemoryUserSessionStore(
            userId,
            sessionId,
            now,
            state);
        var executions = new TicketEndpointExecutions();
        await using var app = await CreateAppAsync(
            sessionStore,
            executions,
            userId,
            now);
        using var client = app.GetTestClient();

        using var response = await SendAsync(
            client,
            HttpMethod.Get,
            "/me/tickets",
            CreateAccessToken(userId, sessionId));

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
        Assert.Equal(0, executions.Count);
    }

    private static async Task<WebApplication> CreateAppAsync(
        InMemoryUserSessionStore sessionStore,
        TicketEndpointExecutions executions,
        Guid userId,
        DateTimeOffset now)
    {
        var builder = WebApplication.CreateBuilder(new WebApplicationOptions
        {
            EnvironmentName = "Testing"
        });
        builder.WebHost.UseTestServer();
        builder.Configuration.AddInMemoryCollection(
            new Dictionary<string, string?>
            {
                ["Jwt:Key"] = SigningKey,
                ["Jwt:Issuer"] = Issuer,
                ["Jwt:Audience"] = Audience
            });

        builder.AddJwtOptions();
        builder.Services.AddAuthorization();
        builder.Services.AddHttpContextAccessor();
        builder.Services.AddScoped<IUserContext, UserContext>();
        builder.Services.AddSingleton<IApiContext, ApiContextTestData>();
        builder.Services.AddSingleton<IJwtRevocationStore, AllowAllJwtRevocationStore>();
        builder.Services.AddSingleton<IDateTimeService>(new FixedDateTimeService(now));
        builder.Services.AddSingleton<IOptions<UserSessionOptions>>(
            Options.Create(new UserSessionOptions
            {
                DefaultSessionExpiryMinutes = 30,
                PersistentSessionExpiryDays = 7
            }));
        builder.Services.AddSingleton(sessionStore);
        builder.Services.AddSingleton<IUserSessionReader>(
            services => services.GetRequiredService<InMemoryUserSessionStore>());
        builder.Services.AddSingleton<IUserSessionRepository>(
            services => services.GetRequiredService<InMemoryUserSessionStore>());
        builder.Services.AddSingleton(executions);
        builder.Services.AddScoped<
            ICommandHandler<UserSessionActivityCommand>,
            UserSessionActivityHandler>();
        builder.Services.AddScoped<
            ICommandHandler<LogoutCommand, LogoutResponse>,
            LogoutHandler>();
        builder.Services.AddSingleton<IRefreshTokenRepository, NoOpRefreshTokenRepository>();
        builder.Services.AddSingleton<IUserReader>(
            new TestUserReader(new ApplicationUser { Id = userId }));
        builder.Services.AddSingleton<IDomainEventDispatcher, NoOpDomainEventDispatcher>();

        var app = builder.Build();
        app.UseExceptionHandling();
        app.UseAuthentication();
        app.UseUserSessionActivity();
        app.UseAuthorization();
        app.MapGet(
                "/me/tickets",
                (TicketEndpointExecutions count) =>
                {
                    count.RecordExecution();
                    return Results.Ok();
                })
            .RequireAuthorization();
        app.MapPost(
                "/logout",
                async (
                    ICommandHandler<LogoutCommand, LogoutResponse> handler,
                    CancellationToken cancellationToken) =>
                {
                    await handler.HandleAsync(
                        new LogoutCommand(),
                        cancellationToken);

                    return Results.Ok();
                })
            .RequireAuthorization();
        await app.StartAsync(TestContext.Current.CancellationToken);

        return app;
    }

    private static async Task<HttpResponseMessage> SendAsync(
        HttpClient client,
        HttpMethod method,
        string path,
        string token)
    {
        using var request = new HttpRequestMessage(method, path);
        request.Headers.Authorization =
            new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

        return await client.SendAsync(
            request,
            TestContext.Current.CancellationToken);
    }

    private static string CreateAccessToken(Guid userId, Guid sessionId)
    {
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, userId.ToString()),
            new Claim(JwtRegisteredClaimNames.Sid, sessionId.ToString()),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(JwtRegisteredClaimNames.Name, "user-session-test"),
            new Claim(JwtRegisteredClaimNames.UniqueName, "user-session-test")
        };
        var credentials = new SigningCredentials(
            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SigningKey)),
            SecurityAlgorithms.HmacSha256Signature);
        var token = new JwtSecurityToken(
            Issuer,
            Audience,
            claims,
            DateTime.UtcNow.AddMinutes(-1),
            DateTime.UtcNow.AddMinutes(5),
            credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public enum SessionState
    {
        Active,
        Missing,
        Revoked,
        Expired,
        MissingExpiry,
        FutureRevocation
    }

    private sealed class InMemoryUserSessionStore : IUserSessionReader, IUserSessionRepository
    {
        private readonly object _sync = new();
        private readonly bool _pauseFirstActivityUpdate;
        private readonly TaskCompletionSource _firstActivityUpdateStarted = new(
            TaskCreationOptions.RunContinuationsAsynchronously);
        private readonly TaskCompletionSource _continueFirstActivityUpdate = new(
            TaskCreationOptions.RunContinuationsAsynchronously);
        private ApplicationUserSession? _session;
        private int _activityUpdateCount;

        public InMemoryUserSessionStore(
            Guid userId,
            Guid sessionId,
            DateTimeOffset now,
            SessionState state,
            bool pauseFirstActivityUpdate = false)
        {
            _pauseFirstActivityUpdate = pauseFirstActivityUpdate;

            if (state == SessionState.Missing)
            {
                return;
            }

            _session = new ApplicationUserSession
            {
                Id = sessionId,
                UserId = userId,
                CreatedAt = now.AddMinutes(-1),
                ExpiresAt = state switch
                {
                    SessionState.Expired => now.AddMinutes(-1),
                    SessionState.MissingExpiry => null,
                    _ => now.AddHours(1)
                },
                RevokedAt = state switch
                {
                    SessionState.Revoked => now.AddMinutes(-1),
                    SessionState.FutureRevocation => now.AddMinutes(1),
                    _ => null
                }
            };
        }

        public DateTimeOffset? RevokedAt
        {
            get
            {
                lock (_sync)
                {
                    return _session?.RevokedAt;
                }
            }
        }

        public Task WaitForFirstActivityUpdateAsync() =>
            _firstActivityUpdateStarted.Task.WaitAsync(TimeSpan.FromSeconds(10));

        public void ContinueFirstActivityUpdate() =>
            _continueFirstActivityUpdate.TrySetResult();

        public Task<ApplicationUserSession?> GetCurrentAsync(
            Guid sessionId,
            CancellationToken cancellationToken = default)
        {
            lock (_sync)
            {
                var session = _session is not null && _session.Id == sessionId
                    ? Copy(_session)
                    : null;

                return Task.FromResult(session);
            }
        }

        public Task<DateTimeOffset?> GetExpiresAtAsync(
            Guid userId,
            CancellationToken cancellationToken = default)
        {
            lock (_sync)
            {
                return Task.FromResult(
                    _session?.UserId == userId
                        ? _session.ExpiresAt
                        : null);
            }
        }

        public Task AddAsync(
            ApplicationUserSession userSession,
            CancellationToken cancellationToken)
        {
            lock (_sync)
            {
                _session = Copy(userSession);
            }

            return Task.CompletedTask;
        }

        public async Task<int> UpdateAsync(
            ApplicationUserSession userSession,
            DateTimeOffset now,
            TimeSpan lifetime,
            CancellationToken cancellationToken)
        {
            if (_pauseFirstActivityUpdate
                && Interlocked.Increment(ref _activityUpdateCount) == 1)
            {
                _firstActivityUpdateStarted.TrySetResult();
                await _continueFirstActivityUpdate.Task.WaitAsync(cancellationToken);
            }

            lock (_sync)
            {
                if (_session is null
                    || _session.Id != userSession.Id
                    || _session.RevokedAt is not null
                    || _session.ExpiresAt is not { } expiresAt
                    || expiresAt <= now)
                {
                    return 0;
                }

                _session.LastActivityAt = now;
                _session.ExpiresAt = now.Add(lifetime);
                return 1;
            }
        }

        public Task<int> RevokeAsync(
            Guid sessionId,
            DateTimeOffset now,
            CancellationToken cancellationToken)
        {
            lock (_sync)
            {
                if (_session is null
                    || _session.Id != sessionId
                    || _session.RevokedAt is not null)
                {
                    return Task.FromResult(0);
                }

                _session.RevokedAt = now;
                return Task.FromResult(1);
            }
        }

        private static ApplicationUserSession Copy(ApplicationUserSession session)
        {
            return new ApplicationUserSession
            {
                Id = session.Id,
                UserId = session.UserId,
                CreatedAt = session.CreatedAt,
                LastActivityAt = session.LastActivityAt,
                ExpiresAt = session.ExpiresAt,
                RevokedAt = session.RevokedAt,
                IsPersistent = session.IsPersistent
            };
        }
    }

    private sealed class TicketEndpointExecutions
    {
        private int _count;

        public int Count => Volatile.Read(ref _count);

        public void RecordExecution()
        {
            Interlocked.Increment(ref _count);
        }
    }

    private sealed class AllowAllJwtRevocationStore : IJwtRevocationStore
    {
        public Task RevokeAsync(
            Guid jti,
            DateTimeOffset expiresAt,
            CancellationToken cancellationToken) =>
            Task.CompletedTask;

        public Task<bool> IsRevokedAsync(
            Guid jti,
            CancellationToken cancellationToken) =>
            Task.FromResult(false);
    }

    private sealed class NoOpRefreshTokenRepository : IRefreshTokenRepository
    {
        public Task AddAsync(
            ApplicationRefreshToken refreshToken,
            CancellationToken cancellationToken) =>
            throw new NotSupportedException();

        public Task<int> RevokeAllAsync(
            Guid userId,
            DateTimeOffset now,
            CancellationToken cancellationToken) =>
            Task.FromResult(0);
    }

    private sealed class TestUserReader(ApplicationUser user) : IUserReader
    {
        public Task<ApplicationUser?> GetUserAsync(string userId) =>
            Task.FromResult<ApplicationUser?>(user);

        public Task<ApplicationUser?> GetUserByEmailAsync(string email) =>
            throw new NotSupportedException();

        public Task<PagedResult<UserAccountData>> GetAllAsync(
            QueryParameters query,
            CancellationToken cancellationToken = default) =>
            throw new NotSupportedException();

        public Task<IReadOnlyList<UserAccountData>> GetAsync(
            string? search,
            int offset,
            int pageSize,
            CancellationToken cancellationToken = default) =>
            throw new NotSupportedException();

        public Task<UserAccountData> GetByIdAsync(
            Guid userId,
            CancellationToken cancellationToken = default) =>
            throw new NotSupportedException();

        public Task<UserAccountRowVersionData> GetNewRowVersionAsync(
            Guid userId,
            CancellationToken cancellationToken = default) =>
            throw new NotSupportedException();

        public Task<bool> IsEmployee(
            Guid userId,
            CancellationToken cancellationToken = default) =>
            throw new NotSupportedException();
    }

    private sealed class NoOpDomainEventDispatcher : IDomainEventDispatcher
    {
        public Task DispatchAsync(
            IDomainEvent @event,
            CancellationToken cancellationToken = default) =>
            Task.CompletedTask;
    }
}
