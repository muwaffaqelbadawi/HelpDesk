using HelpDesk.src.Shared.Histories.HistoryTypes;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITicketWriter
{
    Task WriteAsync(
        Guid userId,
        Guid ticketId,
        TicketHistoryTypes type,
        DateTimeOffset occurredAt,
        CancellationToken cancellationToken = default);
}
