using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.RevokeToken;

public sealed class RevokeTokenHandler :
    ICommandHandler<RevokeTokenCommand, RevokeTokenResponse>
{
    private readonly IUserContext _userContext;
    private readonly IRefreshTokenRevocationService _refreshTokenRevocationService;
    private readonly ILogger<RevokeTokenHandler> _logger;

    public RevokeTokenHandler(
        IUserContext userContext,
        IRefreshTokenRevocationService refreshTokenRevocationService,
        ILogger<RevokeTokenHandler> logger)
    {
        _userContext = userContext;
        _refreshTokenRevocationService = refreshTokenRevocationService;
        _logger = logger;
    }

    public async Task<RevokeTokenResponse> HandleAsync(
        RevokeTokenCommand command,
        CancellationToken cancellationToken)
    {
        // Self-service

        var userId = _userContext.GuidUserId;

        // Revoke all refresh tokens
        var count = await _refreshTokenRevocationService.RevokeAllAsync(
            userId,
            cancellationToken);

        // Success log
        _logger.LogInformation("Revoked {TokenCount} active refresh tokens", count);

        return new RevokeTokenResponse(
            RevokedTokenCount: count);
    }
}
