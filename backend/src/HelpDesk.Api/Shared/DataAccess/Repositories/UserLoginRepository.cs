using HelpDesk.Infrastructure.Database.DbContext;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Shared.DataAccess.Repositories;

public sealed class UserLoginRepository(AppDbContext dbContext) : IUserLoginRepository
{
    public async Task AddAsync(
        ApplicationUserSession userSession,
        ApplicationRefreshToken refreshToken,
        CancellationToken cancellationToken)
    {
        dbContext.UserSessions.Add(userSession);
        dbContext.RefreshTokens.Add(refreshToken);

        await dbContext.SaveChangesAsync(cancellationToken);
    }
}
