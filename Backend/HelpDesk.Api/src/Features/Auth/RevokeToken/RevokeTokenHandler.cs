using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.RevokeToken;

public sealed class RevokeTokenHandler :
    ICommandHandler<RevokeTokenCommand, RevokeTokenResponse>
{
    private readonly IUserContext _userContext;
    private readonly IRefreshTokenRepository _refreshTokenRepository;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<RevokeTokenHandler> _logger;

    public RevokeTokenHandler(
        IUserContext userContext,
        IRefreshTokenRepository refreshTokenRepository,
        IDateTimeService dateTimeService,
        ILogger<RevokeTokenHandler> logger)
    {
        _userContext = userContext;
        _refreshTokenRepository = refreshTokenRepository;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<RevokeTokenResponse> HandleAsync(
        RevokeTokenCommand command,
        CancellationToken cancellationToken)
    {
        var userId = _userContext.GuidUserId;

        var now = _dateTimeService.UtcNow;

        // Revoke all refresh tokens
        var count = await _refreshTokenRepository.RevokeAllAsync(
            userId,
            now,
            cancellationToken);

        // Success log
        _logger.LogInformation("Revoked {TokenCount} active refresh tokens", count);

        return new RevokeTokenResponse(
            RevokedTokenCount: count);
    }
}
