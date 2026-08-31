using HelpDesk.src.Shared.Histories.HistoryTypes;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Create;

public sealed class TicketCreatedHandler
    : IDomainEventHandler<TicketCreated>
{
    private readonly ITicketWriter _historyWriter;

    public TicketCreatedHandler(ITicketWriter historyWriter)
    {
        _historyWriter = historyWriter;
    }

    // Domain-event handler (Subscriber)
    public Task Handle(
        TicketCreated @event,
        CancellationToken cancellationToken = default)
    {
        // React to ticket creation.

        return _historyWriter.WriteAsync(
            userId: @event.UserId,
            ticketId: @event.TicketId,
            type: TicketHistoryTypes.Created,
            occurredAt: @event.OccurredAt,
            cancellationToken: cancellationToken);
    }
}
