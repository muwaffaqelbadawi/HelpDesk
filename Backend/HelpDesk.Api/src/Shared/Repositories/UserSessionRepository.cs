using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Shared.Repositories;

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
}
