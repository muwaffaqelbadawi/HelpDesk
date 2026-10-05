using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IRefreshTokenRepository
{
    Task AddAsync(
        ApplicationRefreshToken refreshToken,
        CancellationToken cancellationToken);
}
