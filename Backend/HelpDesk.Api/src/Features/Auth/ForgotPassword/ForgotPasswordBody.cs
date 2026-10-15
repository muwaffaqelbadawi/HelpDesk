namespace HelpDesk.src.Features.Auth.ForgotPassword;

public sealed record class ForgotPasswordBody(
     Guid UserId,
    string Email,
    string Token,
    string NewPassword,
    string ConfirmNewPassword);
