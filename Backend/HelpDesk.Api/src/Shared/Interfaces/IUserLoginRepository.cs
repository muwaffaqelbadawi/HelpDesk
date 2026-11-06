using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserLoginRepository
{
    Task AddAsync(
        ApplicationUserSession userSession,
        ApplicationRefreshToken refreshToken,
        CancellationToken cancellationToken);
}
