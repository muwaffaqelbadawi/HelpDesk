using HelpDesk.src.Shared.Histories;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITicketHistoryWriter
{
    Task WriteAsync(
        Guid userId,
        Guid ticketId,
        TicketHistoryTypes type,
        DateTimeOffset occurredAt,
        CancellationToken cancellationToken = default);
}
