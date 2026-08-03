namespace HelpDesk.src.Features.Auth.ForgotPassword.ResetForgottenPassword;

public sealed record ResetForgottenPasswordBody(
    string UserId,
    string Token,
    string NewPassword);
