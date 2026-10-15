namespace HelpDesk.src.Features.Auth.ForgotPassword;

public sealed record ForgotPasswordCommand(
    Guid UserId,
    string Email,
    string Token,
    string NewPassword,
    string ConfirmNewPassword);