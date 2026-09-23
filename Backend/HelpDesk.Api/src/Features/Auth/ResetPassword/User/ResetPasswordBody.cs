namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed record ResetPasswordBody(
    string UserId,
    string ResetToken,
    string NewPassword,
    string ConfirmNewPassword);
