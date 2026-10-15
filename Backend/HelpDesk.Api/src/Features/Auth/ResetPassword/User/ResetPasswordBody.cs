namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed record ResetPasswordBody(
    Guid UserId,
    string ResetToken,
    string NewPassword,
    string ConfirmNewPassword);
