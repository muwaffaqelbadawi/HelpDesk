namespace HelpDesk.src.Features.Auth.ResetPassword;

public sealed record ResetPasswordCommand(
    Guid UserId,
    string NewPassword);