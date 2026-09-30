using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IRefreshTokenReader
{
    Task<ApplicationRefreshToken?> GetRefreshTokenAsync(
        string refreshToken,
        CancellationToken cancellationToken);
}
