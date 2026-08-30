namespace HelpDesk.src.Shared.Interfaces;

public interface ICommandHandler<in TCommand>
{
    Task HandleAsync(
        TCommand command,
        CancellationToken cancellationToken);
}

public interface ICommandHandler<in TCommand, TResponse>
{
    Task<TResponse> HandleAsync(
        TCommand command,
        CancellationToken cancellationToken);
}
