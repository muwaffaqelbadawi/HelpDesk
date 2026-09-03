namespace HelpDesk.src.Shared.Interfaces;

public interface ICommandBehavior<TCommand>
{
    // Behavior for handlers without response
    Task HandleAsync(
        TCommand command,
        Func<Task> next,
        CancellationToken cancellationToken);
}

public interface ICommandBehavior<TCommand, TResponse>
{
    // Behavior for handlers with response
    Task<TResponse> HandleAsync(
        TCommand command,
        Func<Task<TResponse>> next,
        CancellationToken cancellationToken);
}
