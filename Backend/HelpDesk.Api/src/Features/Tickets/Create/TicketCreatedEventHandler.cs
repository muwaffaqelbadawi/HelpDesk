using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Create;

public sealed class TicketCreatedEventHandler(ITicketWriter historyWriter)
    : IDomainEventHandler<TicketCreatedEvent>
{
    public Task HandleAsync(
        TicketCreatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return historyWriter.WriteAsync(
            userId: @event.User.Id,
            ticketId: @event.TicketId,
            type: TicketHistoryType.Created,
            occurredAt: @event.OccurredAt,
            cancellationToken: cancellationToken);
    }
}
