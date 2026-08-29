namespace HelpDesk.src.Shared.Interfaces;

public interface IQueryHandler<in TQuery, TResult>
{
    Task<TResult> HandleAsync(
        TQuery query,
        CancellationToken cancellationToken);
}

public interface IQueryHandler<TResult>
{
    // Query handler with only response

    Task<TResult> HandleAsync(
        CancellationToken cancellationToken);
}
