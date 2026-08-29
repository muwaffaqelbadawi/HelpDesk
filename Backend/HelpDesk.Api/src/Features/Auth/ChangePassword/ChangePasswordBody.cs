namespace HelpDesk.src.Features.Auth.ChangePassword;

public sealed record ChangePasswordBody(
    string CurrentPassword,
    string NewPassword);
