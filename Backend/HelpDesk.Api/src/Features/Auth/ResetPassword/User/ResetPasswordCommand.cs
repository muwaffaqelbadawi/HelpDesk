using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed record ResetPasswordCommand(
    string UserId,
    string ResetToken,
    string NewPassword,
    string ConfirmNewPassword) : IPasswordResetAllowedCommand;