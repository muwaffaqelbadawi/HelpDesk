namespace HelpDesk.Features.Auth.ResetPassword.Admin;

public sealed record AdminResetPasswordCommand(
    Guid UserId,
    string NewPassword);