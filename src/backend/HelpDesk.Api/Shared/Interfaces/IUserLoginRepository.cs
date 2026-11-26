using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface IUserLoginRepository
{
    Task AddAsync(
        ApplicationUserSession userSession,
        ApplicationRefreshToken refreshToken,
        CancellationToken cancellationToken);
}
