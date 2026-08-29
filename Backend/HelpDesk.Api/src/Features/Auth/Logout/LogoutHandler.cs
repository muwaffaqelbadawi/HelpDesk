using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Logout;

public sealed class LogoutHandler :
    ICommandHandler<LogoutCommand, LogoutResponse>
{
    private readonly IUserContext _userContext;
    private readonly IRefreshTokenRevocationService _refreshTokenRevocationService;
    private readonly ILogger<LogoutHandler> _logger;

    public LogoutHandler(
        IUserContext userContext,
        IRefreshTokenRevocationService refreshTokenRevocationService,
        ILogger<LogoutHandler> logger)
    {
        _userContext = userContext;
        _refreshTokenRevocationService = refreshTokenRevocationService;
        _logger = logger;
    }

    public async Task<LogoutResponse> HandleAsync(
        LogoutCommand command,
        CancellationToken cancellationToken)
    {
        // Self-service
        var userId = _userContext.GuidUserId;

        // Revoke all refresh tokens
        var count = await _refreshTokenRevocationService.RevokeAllAsync(
            userId,
            cancellationToken);

        // Success log
        _logger.LogInformation(
            "User {UserId} logged out. Revoked {TokenCount} active refresh tokens",
            userId,
            count);

        return new LogoutResponse(
            RevokedTokenCount: count);
    }
}
