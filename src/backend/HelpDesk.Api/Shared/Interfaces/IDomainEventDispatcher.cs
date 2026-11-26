namespace HelpDesk.Shared.Interfaces;

public interface IDomainEventDispatcher
{
    Task DispatchAsync(
        IDomainEvent @event,
        CancellationToken cancellationToken = default);
}
