using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Assign;

public sealed class TicketAssignedEventHandler(ITicketWriter historyWriter)
    : IDomainEventHandler<TicketAssignedEvent>
{
    public Task HandleAsync(
        TicketAssignedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return historyWriter.WriteAsync(
            userId: @event.User.Id,
            ticketId: @event.TicketId,
            type: TicketHistoryType.Assigned,
            occurredAt: @event.OccurredAt,
            cancellationToken: cancellationToken);
    }
}
