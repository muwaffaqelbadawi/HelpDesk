using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.ResetPassword;

public sealed class PasswordResetPolicy(
    IPasswordResetState state)
        : IPasswordResetPolicy
{
    public Task EnsurePasswordResetNotRequiredAsync(
        CancellationToken cancellationToken)
    {
        return state.MustResetPassword
            ? throw new PasswordResetRequiredException()
            : Task.CompletedTask;
    }
}
