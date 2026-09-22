using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Behaviors;

public sealed class PasswordResetBehavior<TCommand>(IPasswordResetPolicy policy)
    : ICommandHandlerBehavior<TCommand>
{
    public async Task HandleAsync(
        TCommand command,
        Func<Task> next,
        CancellationToken cancellationToken)
    {
        if (command is IPasswordResetAllowedCommand)
        {
            await next();
            return;
        }

        await policy.EnsurePasswordResetNotRequiredAsync(
           cancellationToken);

        await next();
    }
}

public sealed class PasswordResetBehavior<TCommand, TResult>(
    IPasswordResetPolicy policy)
    : ICommandHandlerBehavior<TCommand, TResult>
{
    public async Task<TResult> HandleAsync(
        TCommand command,
        Func<Task<TResult>> next,
        CancellationToken cancellationToken)
    {
        if (command is IPasswordResetAllowedCommand)
        {
            return await next();
        }

        await policy.EnsurePasswordResetNotRequiredAsync(
            cancellationToken);

        return await next();
    }
}
