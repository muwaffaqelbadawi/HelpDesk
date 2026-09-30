using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Create;

public sealed class TicketCreatedEventHandler(ITicketRepository repository)
    : IDomainEventHandler<TicketCreatedEvent>
{
    public Task HandleAsync(
        TicketCreatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return repository.AddToHistory(
            userId: @event.User.Id,
            ticketId: @event.TicketId,
            type: TicketHistoryType.Created,
            occurredAt: @event.OccurredAt,
            cancellationToken: cancellationToken);
    }
}
