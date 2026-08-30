using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.PipeLines;

public sealed class CommandPipeline<TCommand>(
    ICommandHandler<TCommand> handler,
    IEnumerable<ICommandBehavior<TCommand>> behaviors)
    : ICommandHandler<TCommand>
{
    public Task HandleAsync(
        TCommand command,
        CancellationToken cancellationToken)
    {
        Func<Task> next =
            () => handler.HandleAsync(
                command,
                cancellationToken);

        foreach (var behavior in behaviors.Reverse())
        {
            var current = next;

            next = () => behavior.HandleAsync(
                command,
                current,
                cancellationToken);
        }

        return next();
    }
}

public sealed class CommandPipeline<TCommand, TResponse>(
    ICommandHandler<TCommand, TResponse> handler,
    IEnumerable<ICommandBehavior<TCommand, TResponse>> behaviors)
    : ICommandHandler<TCommand, TResponse>
{
    public Task<TResponse> HandleAsync(
        TCommand command,
        CancellationToken cancellationToken)
    {
        Func<Task<TResponse>> next =
            () => handler.HandleAsync(
                command,
                cancellationToken);

        foreach (var behavior in behaviors.Reverse())
        {
            var current = next;

            next = () => behavior.HandleAsync(
                command,
                current,
                cancellationToken);
        }

        return next();
    }
}
