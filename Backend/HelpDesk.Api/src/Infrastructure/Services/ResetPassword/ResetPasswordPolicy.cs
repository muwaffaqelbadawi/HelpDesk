using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.ResetPassword;

public sealed class ResetPasswordPolicy(
    IResetPasswordState state)
        : IResetPasswordPolicy
{
    public Task EnsurePasswordResetNotRequiredAsync(
        CancellationToken cancellationToken)
    {
        return state.MustResetPassword
            ? throw new PasswordResetRequiredException()
            : Task.CompletedTask;
    }
}
