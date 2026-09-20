namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed record ResetPasswordCommand(
    string UserId,
    string ResetToken,
    string NewPassword);