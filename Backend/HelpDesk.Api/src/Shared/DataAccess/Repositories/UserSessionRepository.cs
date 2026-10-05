using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Shared.DataAccess.Repositories;

public sealed class UserSessionRepository(AppDbContext dbContext)
    : IUserSessionRepository
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
}
