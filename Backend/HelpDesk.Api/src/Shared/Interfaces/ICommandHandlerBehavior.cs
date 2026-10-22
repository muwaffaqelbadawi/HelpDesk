namespace HelpDesk.src.Shared.Interfaces;

public interface ICommandHandlerBehavior<TCommand>
{
    Task HandleAsync(
        TCommand command,
        Func<Task> next,
        CancellationToken cancellationToken);
}

public interface ICommandHandlerBehavior<TCommand, TResponse>
{
    Task<TResponse> HandleAsync(
        TCommand command,
        Func<Task<TResponse>> next,
        CancellationToken cancellationToken);
}
