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

        var lifetime = session.IsPersistent
            ? _userSessionOptions.Value.PersistentSessionLifetime
            : _userSessionOptions.Value.DefaultSessionLifetime;

        session.LastActivityAt = now;
        session.ExpiresAt = now.Add(lifetime);

        await _userSessionRepository.UpdateAsync(
            session,
            cancellationToken);
    }
}
