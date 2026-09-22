namespace HelpDesk.src.Shared.Interfaces;

public interface ICommandHandlerBehavior<TCommand>
{
    // Behavior for handlers without response
    Task HandleAsync(
        TCommand command,
        Func<Task> next,
        CancellationToken cancellationToken);
}

public interface ICommandHandlerBehavior<TCommand, TResponse>
{
    // Behavior for handlers with response
    Task<TResponse> HandleAsync(
        TCommand command,
        Func<Task<TResponse>> next,
        CancellationToken cancellationToken);
}
