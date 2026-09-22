using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.PipeLines;

public sealed class CommandHandlerPipeline<TCommand>(
    ICommandHandler<TCommand> handler,
    IEnumerable<ICommandHandlerBehavior<TCommand>> behaviors)
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

public sealed class CommandHandlerPipeline<TCommand, TResponse>(
    ICommandHandler<TCommand, TResponse> handler,
    IEnumerable<ICommandHandlerBehavior<TCommand, TResponse>> behaviors)
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
