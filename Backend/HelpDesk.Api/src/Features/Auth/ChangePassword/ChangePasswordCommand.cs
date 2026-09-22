using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ChangePassword;

public sealed record ChangePasswordCommand(
    string CurrentPassword,
    string NewPassword) : IPasswordResetAllowedCommand;