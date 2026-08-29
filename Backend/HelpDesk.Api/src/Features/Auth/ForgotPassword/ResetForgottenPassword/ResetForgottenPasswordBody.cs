namespace HelpDesk.src.Features.Auth.ForgotPassword.ResetForgottenPassword;

public sealed record ResetForgottenPasswordBody(
    Guid UserId,
    string Token,
    string NewPassword);
