using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.RefreshToken;

public sealed class RefreshTokenHandler :
    ICommandHandler<RefreshTokenCommand, RefreshTokenResponse>
{
    private readonly IRefreshTokenReader _refreshTokenReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IRefreshTokenRevocationService _refreshTokenRevocationService;
    private readonly ITokenService _tokenService;
    private readonly IUserContext _userContext;
    private readonly IUserReader _userReader;
    private readonly IUserSessionReader _userSessionReader;
    private readonly IUserProvider _userProvider;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<RefreshTokenHandler> _logger;

    public RefreshTokenHandler(
        IRefreshTokenReader refreshTokenReader,
        IDateTimeService dateTimeService,
        IRefreshTokenRevocationService refreshTokenRevocationService,
        ITokenService tokenService,
        IUserContext userContext,
        IUserReader userReader,
        IUserSessionReader userSessionReader,
        IUserProvider userProvider,
        IDomainEventDispatcher dispatcher,
        ILogger<RefreshTokenHandler> logger)
    {
        _refreshTokenReader = refreshTokenReader;
        _dateTimeService = dateTimeService;
        _refreshTokenRevocationService = refreshTokenRevocationService;
        _tokenService = tokenService;
        _userContext = userContext;
        _userReader = userReader;
        _userSessionReader = userSessionReader;
        _userProvider = userProvider;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<RefreshTokenResponse> HandleAsync(
        RefreshTokenCommand command,
        CancellationToken cancellationToken)
    {
        // Read the refresh token
        var existingToken = await _refreshTokenReader.GetRefreshTokenAsync(
            command.RefreshToken,
            cancellationToken);

        if (existingToken is null)
        {
            _logger.LogWarning("Invalid refresh token.");

            throw new AuthenticationFailedException("Invalid refresh token.");
        }

        var userId = existingToken.UserId;
        var revokedAt = existingToken.RevokedAt;

        // Check if already revoked
        if (revokedAt is not null)
        {
            _logger.LogWarning(
               "Refresh token reused or revoked for user {UserId}. Revoked at: {RevokedAt}",
               userId,
               revokedAt);

            // Security: If a revoked token is used, revoke ALL tokens for this user
            // This handles token theft detection
            await _refreshTokenRevocationService.RevokeAllAsync(
                userId,
                cancellationToken);

            throw new AuthenticationFailedException("Invalid refresh token.");
        }

        var now = _dateTimeService.UtcNow;

        var userSessionExpiresAt = await _userSessionReader.GetExpiresAtAsync(
            userId,
            cancellationToken);

        if (userSessionExpiresAt is null || userSessionExpiresAt <= now)
        {
            _logger.LogWarning("User session expired for user {userId}.", userId);

            throw new AuthenticationFailedException("User session has expired.");
        }

        var expiresAt = existingToken.ExpiresAt;

        // Check expiry
        if (expiresAt <= now)
        {
            _logger.LogWarning("Expired refresh token used for user {user}",
                userId);

            throw new AuthenticationFailedException("Refresh token has expired.");
        }

        // lookup user
        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        var sessionId = _userContext.SessionId;

        // Issue new token
        var token = await _tokenService.IssueAfterRefreshAsync(
            user,
            sessionId,
            existingToken,
            cancellationToken);

        // Get user
        var userAccountData = await _userReader.GetByIdAsync(
            userId,
            cancellationToken);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new TokenRefreshedEvent(
                User: user,
                OccurredAt: now),
            cancellationToken);

        return new RefreshTokenResponse(
            UserAccountData: userAccountData,
            Token: token);
    }
}
