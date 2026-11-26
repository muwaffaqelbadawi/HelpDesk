using HelpDesk.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Tickets.Assign;

public sealed class TicketAssignedEventHandler(ITicketRepository repository)
    : IDomainEventHandler<TicketAssignedEvent>
{
    public Task HandleAsync(
        TicketAssignedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return repository.AddToHistory(
            userId: @event.User.Id,
            ticketId: @event.TicketId,
            type: TicketHistoryType.Assigned,
            occurredAt: @event.OccurredAt,
            cancellationToken: cancellationToken);
    }
}
