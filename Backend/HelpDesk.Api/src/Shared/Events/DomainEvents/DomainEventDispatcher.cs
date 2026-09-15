using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Shared.Events.DomainEvents;

public sealed class DomainEventDispatcher(
    IServiceProvider serviceProvider) : IDomainEventDispatcher
{
    public async Task DispatchAsync(
        IDomainEvent @event,
        CancellationToken cancellationToken = default)
    {
        var eventType = @event.GetType();

        var handlerType = typeof(IDomainEventHandler<>)
            .MakeGenericType(eventType);

        var handlers = serviceProvider
            .GetServices(handlerType);

        foreach (var handler in handlers.OfType<object>())
        {
            await ((dynamic)handler).HandleAsync(
                (dynamic)@event,
                cancellationToken);
        }
    }
}
