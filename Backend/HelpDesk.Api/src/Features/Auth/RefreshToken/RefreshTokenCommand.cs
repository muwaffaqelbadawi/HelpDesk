using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.RefreshToken;

public sealed record RefreshTokenCommand(string RefreshToken)
    : IPasswordResetAllowedCommand;
