using HelpDesk.src.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Services.UserSession;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Features.Auth.UserSession;

public sealed class UserSessionActivityHandler
    : ICommandHandler<UserSessionActivityCommand>
{
    private readonly IDateTimeService _dateTimeService;
    private readonly IOptions<UserSessionOptions> _userSessionOptions;
    private readonly IUserSessionReader _userSessionReader;
    private readonly IUserSessionRepository _userSessionRepository;
    private readonly ILogger<UserSessionActivityHandler> _logger;

    public UserSessionActivityHandler(
        IDateTimeService dateTimeService,
        IOptions<UserSessionOptions> userSessionOptions,
        IUserSessionReader userSessionReader,
        IUserSessionRepository userSessionRepository,
        ILogger<UserSessionActivityHandler> logger)
    {
        _dateTimeService = dateTimeService;
        _userSessionOptions = userSessionOptions;
        _userSessionReader = userSessionReader;
        _userSessionRepository = userSessionRepository;
        _logger = logger;
    }

    public async Task HandleAsync(
        UserSessionActivityCommand command,
        CancellationToken cancellationToken)
    {
        // now
        var now = _dateTimeService.UtcNow;

        // sessionId
        var sessionId = command.SessionId;

        var session = await _userSessionReader.GetCurrentAsync(
            sessionId,
            cancellationToken);

        if (session is null
            || session.ExpiresAt is null
            || session.ExpiresAt <= now)
        {
            throw new AuthenticationFailedException("User session has expired.");
        }

        if (session.RevokedAt is not null)
        {
            throw new AuthenticationRequiredException("User session has been revoked.");
        }

        var lifetime = session.IsPersistent
            ? _userSessionOptions.Value.PersistentSessionLifetime
            : _userSessionOptions.Value.DefaultSessionLifetime;

        var updatedRows = await _userSessionRepository.UpdateAsync(
            session,
            now,
            lifetime,
            cancellationToken);

        if (updatedRows == 0)
        {
            throw new AuthenticationRequiredException(
                "User session is no longer active.");
        }

        var updatedSession = await _userSessionReader.GetCurrentAsync(
            sessionId,
            cancellationToken);

        if (updatedSession?.ExpiresAt is null)
        {
            throw new AuthenticationRequiredException(
                "User session is no longer active.");
        }

        var userId = session.UserId;
        var expiresAt = updatedSession.ExpiresAt;
        var revokedAt = session.RevokedAt;
        var isExpired = expiresAt <= now;
        var isRevoked = revokedAt <= now;

        // Successful log
        _logger.UserSessionActivityLog(
            sessionId,
            userId,
            expiresAt,
            revokedAt,
            now,
            isExpired,
            isRevoked);
    }
}
