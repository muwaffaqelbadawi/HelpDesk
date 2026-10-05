using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.ResetPassword;

public sealed class ResetPasswordState(
    IUserContext userContext,
    IUserProvider userProvider)
        : IResetPasswordState
{
    public bool MustResetPassword
        => userProvider
            .GetUserAsync(userContext.UserId)
            .GetAwaiter()
            .GetResult()
            ?.MustResetPassword ?? false;
}
