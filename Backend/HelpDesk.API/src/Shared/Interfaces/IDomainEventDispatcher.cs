namespace HelpDesk.src.Shared.Interfaces;

public interface IDomainEventDispatcher
{
    // Dispatches an event to its subscribers
    // e.g, TicketCreatedHandler

    Task DispatchAsync(
        IDomainEvent @event,
        CancellationToken cancellationToken = default);
}
