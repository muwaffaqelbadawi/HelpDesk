using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITicketWriter
{
    Task WriteAsync(
        Guid userId,
        Guid ticketId,
        TicketHistoryType type,
        DateTimeOffset occurredAt,
        CancellationToken cancellationToken = default);
}
