using HelpDesk.src.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Services.UserSession;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Features.Auth.RefreshToken;

public sealed class RefreshTokenHandler
    : ICommandHandler<RefreshTokenCommand, RefreshTokenResponse>
{
    private readonly IRefreshTokenReader _refreshTokenReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IRefreshTokenRepository _refreshTokenRepository;
    private readonly ITokenIssuer _tokenIssuer;
    private readonly IUserReader _userReader;
    private readonly IUserSessionReader _userSessionReader;
    private readonly IOptions<UserSessionOptions> _userSessionOptions;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<RefreshTokenHandler> _logger;

    public RefreshTokenHandler(
        IRefreshTokenReader refreshTokenReader,
        IDateTimeService dateTimeService,
        IRefreshTokenRepository refreshTokenRepository,
        ITokenIssuer tokenIssuer,
        IUserReader userReader,
        IUserSessionReader userSessionReader,
        IOptions<UserSessionOptions> userSessionOptions,
        IDomainEventDispatcher dispatcher,
        ILogger<RefreshTokenHandler> logger)
    {
        _refreshTokenReader = refreshTokenReader;
        _dateTimeService = dateTimeService;
        _refreshTokenRepository = refreshTokenRepository;
        _tokenIssuer = tokenIssuer;
        _userReader = userReader;
        _userSessionReader = userSessionReader;
        _userSessionOptions = userSessionOptions;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<RefreshTokenResponse> HandleAsync(
        RefreshTokenCommand command,
        CancellationToken cancellationToken)
    {
        var existingRefreshToken = await _refreshTokenReader.GetRefreshTokenAsync(
            command.RefreshToken,
            cancellationToken);

        if (existingRefreshToken is null)
        {
            _logger.LogWarning("Invalid refresh token.");

            throw new AuthenticationFailedException("Invalid refresh token.");
        }

        var userId = existingRefreshToken.UserId;
        var revokedAt = existingRefreshToken.RevokedAt;

        // now
        var now = _dateTimeService.UtcNow;

        // Check if already revoked
        if (revokedAt is not null)
        {
            _logger.LogWarning(
               "Refresh token reused or revoked for user {UserId}. Revoked at: {RevokedAt}",
               userId,
               revokedAt);

            // Security: If a revoked token is used, revoke ALL tokens for this user
            // This handles token theft detection
            await _refreshTokenRepository.RevokeAllAsync(
                userId,
                now,
                cancellationToken);

            throw new AuthenticationFailedException("Invalid refresh token.");
        }

        var userSession = await _userSessionReader.GetCurrentAsync(
            existingRefreshToken.UserSessionId,
            cancellationToken);

        if (userSession is null
            || userSession.UserId != userId
            || userSession.ExpiresAt is null
            || userSession.ExpiresAt <= now
            || userSession.RevokedAt is not null)
        {
            _logger.LogWarning("User session expired for user {userId}.", userId);

            throw new AuthenticationFailedException("User session has expired.");
        }

        var expiresAt = existingRefreshToken.ExpiresAt;
        var isExpired = expiresAt <= now;

        if (isExpired)
        {
            _logger.LogWarning("Expired refresh token used for user {userId}.", userId);

            throw new AuthenticationFailedException("Refresh token has expired.");
        }

        var isRevoked = revokedAt <= now;

        // lookup user
        var user = await _userReader.GetUserAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        var userSessionId = existingRefreshToken.UserSessionId;

        var sessionLifetime = userSession.IsPersistent
            ? _userSessionOptions.Value.PersistentSessionLifetime
            : _userSessionOptions.Value.DefaultSessionLifetime;

        var candidateSessionExpiresAt = now.Add(sessionLifetime);

        var refreshTokenExpiresAt = userSession.ExpiresAt.Value > candidateSessionExpiresAt
            ? userSession.ExpiresAt.Value
            : candidateSessionExpiresAt;

        // Issue new Jwt
        var jwt = _tokenIssuer.IssueTokenObject(
            user,
            userSessionId,
            refreshTokenExpiresAt);

        var replacementRefreshToken = _tokenIssuer.CreateRefreshTokenObject(
            user,
            userSessionId,
            jwt);

        var persistedSessionExpiresAt = await _refreshTokenRepository.RotateAsync(
            existingRefreshToken.Id,
            replacementRefreshToken,
            now,
            sessionLifetime,
            cancellationToken);

        if (persistedSessionExpiresAt is null)
        {
            throw new AuthenticationFailedException("Invalid refresh token.");
        }

        jwt = jwt with
        {
            RefreshTokenExpiresAt = persistedSessionExpiresAt.Value
        };

        // Successful log
        _logger.RefreshTokenLog(
            userSessionId,
            userId,
            expiresAt,
            revokedAt,
            now,
            isExpired,
            isRevoked);

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
            userAccountData,
            jwt);
    }
}
