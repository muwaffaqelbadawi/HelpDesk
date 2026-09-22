using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.ResetPassword;

public sealed class PasswordResetState(
    IUserContext userContext,
    IUserProvider userProvider)
        : IPasswordResetState
{
    public bool MustResetPassword
        => userProvider
            .GetUserAsync(userContext.UserId)
            .GetAwaiter()
            .GetResult()
            ?.MustResetPassword ?? false;
}
