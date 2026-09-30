using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Delete;

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
