using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserSessionReader
{
    Task<ApplicationUserSession?> GetCurrentAsync(
        Guid userId,
        CancellationToken cancellationToken = default);

    Task<DateTimeOffset?> GetExpiresAtAsync(
        Guid userId,
        CancellationToken cancellationToken = default);
}
