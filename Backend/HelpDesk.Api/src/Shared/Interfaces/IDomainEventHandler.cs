namespace HelpDesk.src.Shared.Interfaces;

public interface IDomainEventHandler<in TEvent>
    where TEvent : IDomainEvent
{
    Task Handle(
        TEvent @event,
        CancellationToken cancellationToken = default);
}
