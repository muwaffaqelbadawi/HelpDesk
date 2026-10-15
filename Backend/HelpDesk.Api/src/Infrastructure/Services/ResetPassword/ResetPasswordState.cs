using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.ResetPassword;

public sealed class ResetPasswordState(
    IUserContext userContext,
    IUserReader userReader)
        : IResetPasswordState
{
    public bool MustResetPassword
        => userReader
            .GetUserAsync(userContext.UserId)
            .GetAwaiter()
            .GetResult()
            ?.MustResetPassword ?? false;
}
