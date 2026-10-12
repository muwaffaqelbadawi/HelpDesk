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

    public async Task UpdateAsync(
        ApplicationUserSession userSession,
        CancellationToken cancellationToken)
    {
        dbContext.UserSessions.Update(userSession);

        await dbContext.SaveChangesAsync(cancellationToken);
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
