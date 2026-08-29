namespace HelpDesk.src.Features.Auth.ForgotPassword.ResetForgottenPassword;

public sealed record ResetForgottenPasswordCommand(
    Guid UserId,
    string Token,
    string NewPassword);
