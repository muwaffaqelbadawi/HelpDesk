namespace HelpDesk.src.Shared.Interfaces;

public interface IDomainEventHandler<in TEvent>
    where TEvent : IDomainEvent
{
    Task HandleAsync(
        TEvent @event,
        CancellationToken cancellationToken = default);
}
