using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Repositories;

public sealed class UserSessionRepository(AppDbContext dbContext) : IUserSessionRepository
{
    public async Task AddAsync(
        ApplicationUserSession userSession,
        CancellationToken cancellationToken)
    {
        dbContext.UserSessions.Add(userSession);

        await dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task<int> UpdateAsync(
        ApplicationUserSession session,
        DateTimeOffset now,
        TimeSpan lifetime,
        CancellationToken cancellationToken)
    {
        await using var transaction = await dbContext.Database.BeginTransactionAsync(
            cancellationToken);

        var candidateExpiration = now.Add(lifetime);
        var updatedRows = await dbContext.UserSessions
            .Where(
                x => x.Id == session.Id
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

        if (updatedRows == 0)
        {
            await transaction.RollbackAsync(cancellationToken);
            return 0;
        }

        var expiresAt = await dbContext.UserSessions
            .Where(x => x.Id == session.Id)
            .Select(x => x.ExpiresAt)
            .SingleAsync(cancellationToken);

        if (expiresAt is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return 0;
        }

        await dbContext.RefreshTokens
            .Where(x => x.UserId == session.UserId
                && x.UserSessionId == session.Id
                && x.RevokedAt == null)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(x => x.ExpiresAt, expiresAt),
                cancellationToken);

        await transaction.CommitAsync(cancellationToken);
        return updatedRows;
    }

    public async Task<int> RevokeAsync(
        Guid sessionId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        return await dbContext.UserSessions
            .Where(
                  x => x.Id == sessionId
                    && x.RevokedAt == null)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(x => x.RevokedAt, now),
                    cancellationToken);
    }
}
