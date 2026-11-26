using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface IRefreshTokenReader
{
    Task<ApplicationRefreshToken?> GetRefreshTokenAsync(
        string refreshToken,
        CancellationToken cancellationToken);

    Task<ApplicationRefreshToken?> GetActiveRefreshTokenAsync(
        Guid userId,
        Guid userSessionId,
        DateTimeOffset now,
        CancellationToken cancellationToken);
}
