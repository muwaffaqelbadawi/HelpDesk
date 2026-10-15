using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed record ResetPasswordCommand(
    Guid UserId,
    string ResetToken,
    string NewPassword,
    string ConfirmNewPassword) : ISystemCommand;