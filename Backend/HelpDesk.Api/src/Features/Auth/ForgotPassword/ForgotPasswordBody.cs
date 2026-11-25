namespace HelpDesk.src.Features.Auth.ForgotPassword;

public sealed record ForgotPasswordBody(
     Guid UserId,
    string Email,
    string Token,
    string NewPassword,
    string ConfirmPassword);
