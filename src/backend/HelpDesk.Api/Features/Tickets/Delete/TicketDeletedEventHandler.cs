using HelpDesk.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Tickets.Delete;

public sealed class TicketDeletedEventHandler(ITicketRepository repository)
    : IDomainEventHandler<TicketDeletedEvent>
{
    public Task HandleAsync(
        TicketDeletedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return repository.AddToHistory(
            userId: @event.User.Id,
            ticketId: @event.TicketId,
            type: TicketHistoryType.Deleted,
            occurredAt: @event.OccurredAt,
            cancellationToken: cancellationToken);
    }
}
