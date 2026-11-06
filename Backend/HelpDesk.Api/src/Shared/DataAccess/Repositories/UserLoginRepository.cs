using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Shared.DataAccess.Repositories;

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
