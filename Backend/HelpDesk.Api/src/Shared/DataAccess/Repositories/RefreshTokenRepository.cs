using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Repositories;

public sealed class RefreshTokenRepository(AppDbContext dbContext)
    : IRefreshTokenRepository
{
    public async Task AddAsync(
        ApplicationRefreshToken refreshToken,
        CancellationToken cancellationToken)
    {
        dbContext.RefreshTokens.Add(refreshToken);

        await dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task<int> RevokeAllAsync(
        Guid userId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        return await dbContext.RefreshTokens
            .Where(x => x.UserId == userId
                && x.RevokedAt == null)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(x => x.RevokedAt, now),
                    cancellationToken);
    }

    public async Task<DateTimeOffset?> RotateAsync(
        Guid currentRefreshTokenId,
        ApplicationRefreshToken replacement,
        DateTimeOffset now,
        TimeSpan sessionLifetime,
        CancellationToken cancellationToken)
    {
        await using var transaction = await dbContext.Database.BeginTransactionAsync(
            cancellationToken);

        var candidateExpiration = now.Add(sessionLifetime);
        var sessionRows = await dbContext.UserSessions
            .Where(x => x.Id == replacement.UserSessionId
                && x.UserId == replacement.UserId
                && x.RevokedAt == null
                && x.ExpiresAt != null
                && x.ExpiresAt > now)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(
                    x => x.LastActivityAt,
                    x => x.LastActivityAt == null || x.LastActivityAt < now
                        ? now
                        : x.LastActivityAt)
                .SetProperty(
                    x => x.ExpiresAt,
                    x => x.ExpiresAt > candidateExpiration
                        ? x.ExpiresAt
                        : candidateExpiration),
                cancellationToken);

        if (sessionRows == 0)
        {
            return null;
        }

        var sessionExpiresAt = await dbContext.UserSessions
            .Where(x => x.Id == replacement.UserSessionId)
            .Select(x => x.ExpiresAt)
            .SingleAsync(cancellationToken);

        if (sessionExpiresAt is null)
        {
            return null;
        }

        await dbContext.RefreshTokens
            .Where(x => x.UserId == replacement.UserId
                && x.UserSessionId == replacement.UserSessionId
                && x.RevokedAt == null)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(x => x.ExpiresAt, sessionExpiresAt),
                cancellationToken);

        var revokedRows = await dbContext.RefreshTokens
            .Where(x => x.Id == currentRefreshTokenId
                && x.UserId == replacement.UserId
                && x.UserSessionId == replacement.UserSessionId
                && x.RevokedAt == null)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(x => x.RevokedAt, (DateTimeOffset?)now),
                    cancellationToken);

        if (revokedRows == 0)
        {
            return null;
        }

        replacement.ExpiresAt = sessionExpiresAt;

        dbContext.RefreshTokens.Add(replacement);

        await dbContext.SaveChangesAsync(cancellationToken);

        await transaction.CommitAsync(cancellationToken);

        return sessionExpiresAt;
    }
}
