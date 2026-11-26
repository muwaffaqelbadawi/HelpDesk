namespace HelpDesk.Features.Auth.ResetPassword.User;

public sealed record ResetPasswordCommand(
    Guid UserId,
    string ResetToken,
    string NewPassword,
    string ConfirmPassword);