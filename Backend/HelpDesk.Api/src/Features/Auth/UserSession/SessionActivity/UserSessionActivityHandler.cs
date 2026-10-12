using HelpDesk.src.Infrastructure.Services.UserSession;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Features.Auth.UserSession.SessionActivity;

public sealed class UserSessionActivityHandler
    : ICommandHandler<UserSessionActivityCommand>
{
    private readonly IDateTimeService _dateTimeService;
    private readonly IOptions<UserSessionOptions> _userSessionOptions;
    private readonly IUserSessionReader _userSessionReader;
    private readonly IUserSessionRepository _userSessionRepository;

    public UserSessionActivityHandler(
        IDateTimeService dateTimeService,
        IOptions<UserSessionOptions> userSessionOptions,
        IUserSessionReader userSessionReader,
        IUserSessionRepository userSessionRepository)
    {
        _dateTimeService = dateTimeService;
        _userSessionOptions = userSessionOptions;
        _userSessionReader = userSessionReader;
        _userSessionRepository = userSessionRepository;
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

        if (session is null || session.ExpiresAt <= now)
        {
            throw new AuthenticationFailedException("User session has expired.");
        }

        if (session.RevokedAt is not null && session.RevokedAt <= now)
        {
            throw new AuthenticationRequiredException("User session has been revoked.");
        }

        var lifetime = session.IsPersistent
            ? _userSessionOptions.Value.PersistentSessionLifetime
            : _userSessionOptions.Value.DefaultSessionLifetime;

        // Update the last activity timestamp
        session.LastActivityAt = now;

        // Extend the session expiration time based on the session lifetime
        session.ExpiresAt = now.Add(lifetime);

        await _userSessionRepository.UpdateAsync(
            session,
            cancellationToken);
    }
}
