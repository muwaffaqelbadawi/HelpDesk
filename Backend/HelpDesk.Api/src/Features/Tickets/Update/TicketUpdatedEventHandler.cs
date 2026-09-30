using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Update;

public sealed class TicketUpdatedEventHandler(ITicketRepository repository)
    : IDomainEventHandler<TicketUpdatedEvent>
{
    public Task HandleAsync(
        TicketUpdatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return repository.AddToHistory(
            userId: @event.User.Id,
            ticketId: @event.TicketId,
            type: TicketHistoryType.Updated,
            occurredAt: @event.OccurredAt,
            cancellationToken: cancellationToken);
    }
}
