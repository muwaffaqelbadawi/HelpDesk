using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.UserSession.TerminateAll;

public sealed class TerminateAllUserSessionsHandler
    : ICommandHandler<TerminateAllUserSessionsCommand, TerminateAllUserSessionsResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IRefreshTokenRepository _refreshTokenRepository;
    private readonly IUserSessionRepository _userSessionRepository;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<TerminateAllUserSessionsHandler> _logger;

    public TerminateAllUserSessionsHandler(
        IUserContext userContext,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IRefreshTokenRepository refreshTokenRepository,
        IUserSessionRepository userSessionRepository,
        IDomainEventDispatcher dispatcher,
        ILogger<TerminateAllUserSessionsHandler> logger)
    {
        _userContext = userContext;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _refreshTokenRepository = refreshTokenRepository;
        _userSessionRepository = userSessionRepository;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<TerminateAllUserSessionsResponse> HandleAsync(
        TerminateAllUserSessionsCommand command,
        CancellationToken cancellationToken)
    {
        // user ID
        var userId = _userContext.GuidUserId;

        // session ID
        var sessionId = _userContext.SessionId;

        // now
        var now = _dateTimeService.UtcNow;

        // Revoke the session before its refresh tokens
        // to keep persistence lock order consistent.

        // Revoke all other sessions on all other devices for the specific user
        // Revoke all other refresh tokens for all other devices for the specific user
        // except this on

        // Terminate all other sessions across all devices
        // except the current one
        var userSessionRows = await _userSessionRepository.RevokeAllOtherAsync(
            userId,
            sessionId,
            now,
            cancellationToken);

        var revokedRefreshTokens = await _refreshTokenRepository.RevokeAllOtherAsync(
            userId,
            sessionId,
            now,
            cancellationToken);

        _logger.LogInformation(
            "User {UserId} terminated {SessionCount} other active sessions " +
            "and {TokenCount} associated refresh tokens. Current session preserved.",
            userId,
            userSessionRows,
            revokedRefreshTokens);

        // Retrieve current user for domain event
        var user = await _userReader.GetUserAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new TerminateAllUserSessionsEvent(
                User: user,
                OccurredAt: now,
                SessionId: sessionId),
            cancellationToken: cancellationToken);

        return new TerminateAllUserSessionsResponse(revokedRefreshTokens);
    }
}
