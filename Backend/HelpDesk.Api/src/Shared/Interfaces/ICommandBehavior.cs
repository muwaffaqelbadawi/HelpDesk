namespace HelpDesk.src.Shared.Interfaces;

public interface ICommandBehavior<TCommand, TResponse>
{
    Task<TResponse> HandleAsync(
        TCommand command,
        Func<Task<TResponse>> next,
        CancellationToken cancellationToken);
}
