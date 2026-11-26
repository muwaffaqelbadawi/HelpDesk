using HelpDesk.Shared.Exceptions;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Services.ResetPassword;

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
