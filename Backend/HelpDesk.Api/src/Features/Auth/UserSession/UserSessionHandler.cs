using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.UserSession;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Features.Auth.UserSession;

public sealed class UserSessionHandler
    : ICommandHandler<UserSessionCommand>
{
    private readonly IUserSessionRepository _userSessionRepository;
    private readonly IUserContext _userContext;
    private readonly IOptions<UserSessionOptions> _userSessionOptions;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<UserSessionHandler> _logger;

    public UserSessionHandler(
        IUserSessionRepository userSessionRepository,
        IUserContext userContext,
        IOptions<UserSessionOptions> userSessionOptions,
        IDomainEventDispatcher dispatcher,
        ILogger<UserSessionHandler> logger)
    {
        _userSessionRepository = userSessionRepository;
        _userContext = userContext;
        _userSessionOptions = userSessionOptions;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task HandleAsync(
        UserSessionCommand command,
        CancellationToken cancellationToken)
    {
        // session lifetime
        var sessionLifetime = command.StaySignedIn
            ? _userSessionOptions.Value.PersistentSessionLifetime
            : _userSessionOptions.Value.DefaultSessionLifetime;

        // now
        var now = command.OccurredAt;

        // session expiration time
        var expirationTime = now.Add(sessionLifetime);

        // user ID
        var userId = command.User.Id;

        // Create new user session
        var userSession = new ApplicationUserSession
        {
            Id = command.SessionId,
            UserId = userId,
            UserAgent = _userContext.UserAgent,
            Browser = _userContext.Browser,
            IpAddress = _userContext.IpAddress,
            CreatedAt = now,
            LastActivityAt = now,
            ExpiresAt = expirationTime,
            IsPersistent = command.StaySignedIn,
        };

        // User session repo
        await _userSessionRepository.AddAsync(
            userSession: userSession,
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("User {UserId} session was recorded successfully",
            userId);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new UserSessionCreatedEvent(
                User: command.User,
                OccurredAt: now),
            cancellationToken: cancellationToken);
    }
}
