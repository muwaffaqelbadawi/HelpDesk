namespace HelpDesk.src.Shared.Interfaces;

public interface IQueryHandler<TResult>
{
    Task<TResult> HandleAsync(
        CancellationToken cancellationToken);
}

public interface IQueryHandler<in TQuery, TResult>
{
    Task<TResult> HandleAsync(
        TQuery query,
        CancellationToken cancellationToken);
}
