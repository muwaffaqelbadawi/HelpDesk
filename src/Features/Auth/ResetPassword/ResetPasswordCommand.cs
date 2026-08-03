namespace HelpDesk.src.Features.Auth.ResetPassword;

public sealed record ResetPasswordCommand(
    string UserId,
    string NewPassword);