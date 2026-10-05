using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Login;

public sealed record LoginCommand(
    string Username,
    string Password,
    bool StaySignedIn = false) : ISystemCommand;