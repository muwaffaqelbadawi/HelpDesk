namespace HelpDesk.src.Shared.Interfaces;

public interface IQueryHandlerBehavior<TResult>
{
    Task<TResult> HandleAsync(
        Func<Task<TResult>> next,
        CancellationToken cancellationToken);
}

public interface IQueryHandlerBehavior<TQuery, TResult>
{
    Task<TResult> HandleAsync(
        TQuery query,
        Func<Task<TResult>> next,
        CancellationToken cancellationToken);
}
