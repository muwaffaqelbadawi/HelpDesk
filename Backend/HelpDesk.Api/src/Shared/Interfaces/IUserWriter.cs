using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserWriter
{
    Task WriteAsync(
        Guid userId,
        UserHistoryType type,
        DateTimeOffset occurredAt,
        CancellationToken cancellationToken = default);
}
