using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Logout;

public sealed class LogoutHandler :
    ICommandHandler<LogoutCommand, LogoutResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly IDateTimeService _dateTimeService;
    private readonly IRefreshTokenRepository _refreshTokenRepository;
    private readonly IUserSessionRepository _userSessionRepository;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<LogoutHandler> _logger;

    public LogoutHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        IDateTimeService dateTimeService,
        IRefreshTokenRepository refreshTokenRepository,
        IUserSessionRepository userSessionRepository,
        IDomainEventDispatcher dispatcher,
        ILogger<LogoutHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _dateTimeService = dateTimeService;
        _refreshTokenRepository = refreshTokenRepository;
        _userSessionRepository = userSessionRepository;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<LogoutResponse> HandleAsync(
        LogoutCommand command,
        CancellationToken cancellationToken)
    {
        // user ID
        var userId = _userContext.GuidUserId;

        // session ID
        var sessionId = _userContext.SessionId;

        // now
        var now = _dateTimeService.UtcNow;

        // refresh token repository
        var refreshTokenRows = await _refreshTokenRepository.RevokeAllAsync(
            userId,
            now,
            cancellationToken);

        // session repository
        var userSessionRows = await _userSessionRepository.RevokeAsync(
            sessionId,
            now,
            cancellationToken);

        if (userSessionRows == 0)
        {
            _logger.LogWarning(
                "User {UserId} attempted to log out, " +
                "but no active session was found for session ID {SessionId}",
                userId,
                sessionId);

            throw new ConcurrencyException($"Session {sessionId} was already revoked.");
        }

        // Success log
        _logger.LogInformation(
            "User {UserId} logged out. Revoked {TokenCount} active refresh tokens",
            userId,
            refreshTokenRows);

        // Retrieve current user for domain event
        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new LogoutEvent(
                User: user,
                OccurredAt: now,
                SessionId: sessionId),
            cancellationToken: cancellationToken);

        return new LogoutResponse(refreshTokenRows);
    }
}
