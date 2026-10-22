using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.PipeLines;

public sealed class QueryHandlerPipeline<TResult>(
    IQueryHandler<TResult> handler,
    IEnumerable<IQueryHandlerBehavior<TResult>> behaviors)
        : IQueryHandler<TResult>
{
    public Task<TResult> HandleAsync(
        CancellationToken cancellationToken)
    {
        Func<Task<TResult>> next =
            () => handler.HandleAsync(cancellationToken);

        foreach (var behavior in behaviors.Reverse())
        {
            var currentBehavior = behavior;
            var currentNext = next;

            next = () => currentBehavior.HandleAsync(
                currentNext,
                cancellationToken);
        }

        return next();
    }
}

public sealed class QueryHandlerPipeline<TQuery, TResult>(
    IQueryHandler<TQuery, TResult> handler,
    IEnumerable<IQueryHandlerBehavior<TQuery, TResult>> behaviors)
        : IQueryHandler<TQuery, TResult>
{
    public Task<TResult> HandleAsync(
        TQuery query,
        CancellationToken cancellationToken)
    {
        Func<Task<TResult>> next =
            () => handler.HandleAsync(query, cancellationToken);

        foreach (var behavior in behaviors.Reverse())
        {
            var currentBehavior = behavior;
            var currentNext = next;

            next = () => currentBehavior.HandleAsync(
                query,
                currentNext,
                cancellationToken);
        }

        return next();
    }
}
