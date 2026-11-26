using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface IUserSessionReader
{
    Task<ApplicationUserSession?> GetCurrentAsync(
        Guid sessionId,
        CancellationToken cancellationToken = default);

    Task<DateTimeOffset?> GetExpiresAtAsync(
        Guid userId,
        CancellationToken cancellationToken = default);
}
