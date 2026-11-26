using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.ChangePassword;

public sealed record ChangePasswordCommand(
    string CurrentPassword,
    string NewPassword,
    string ConfirmPassword) : ISystemCommand;