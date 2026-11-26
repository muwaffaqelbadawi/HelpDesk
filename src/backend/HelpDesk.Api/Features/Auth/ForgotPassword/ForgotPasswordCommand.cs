namespace HelpDesk.Features.Auth.ForgotPassword;

public sealed record ForgotPasswordCommand(
    Guid UserId,
    string Email,
    string Token,
    string NewPassword,
    string ConfirmPassword);