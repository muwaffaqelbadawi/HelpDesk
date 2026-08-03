namespace HelpDesk.src.Features.Auth.ForgotPassword.ResetForgottenPassword;

public sealed record ResetForgottenPasswordCommand(
    string UserId,
    string Token,
    string NewPassword);
