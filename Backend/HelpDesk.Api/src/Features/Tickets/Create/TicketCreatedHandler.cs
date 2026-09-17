using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Create;

public sealed class TicketCreatedHandler(
    ITicketWriter historyWriter) : IDomainEventHandler<TicketCreatedEvent>
{
    // Domain-event handler (Subscriber)
    public Task HandleAsync(
        TicketCreatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        // React to ticket creation.
        return historyWriter.WriteAsync(
            userId: @event.User.Id,
            ticketId: @event.TicketId,
            type: TicketHistoryTypes.Created,
            occurredAt: @event.OccurredAt,
            cancellationToken: cancellationToken);
    }
}
