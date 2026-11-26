using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.Login;

public sealed record LoginCommand(
    string Username,
    string Password,
    bool StaySignedIn = false) : ISystemCommand;