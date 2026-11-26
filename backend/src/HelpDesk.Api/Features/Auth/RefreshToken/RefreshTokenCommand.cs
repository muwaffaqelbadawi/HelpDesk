using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.RefreshToken;

public sealed record RefreshTokenCommand(
    string RefreshToken) : ISystemCommand;
