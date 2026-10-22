using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.RevokeToken;

public sealed class RevokeTokenHandler
    : ICommandHandler<RevokeTokenCommand>
{
    private readonly IUserContext _userContext;
    private readonly IJwtRevocationStore _jwtRevocationStore;
    private readonly IDateTimeService _dateTimeService;
    private readonly IUserReader _userReader;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<RevokeTokenHandler> _logger;

    public RevokeTokenHandler(
        IUserContext userContext,
        IJwtRevocationStore jwtRevocationStore,
        IDateTimeService dateTimeService,
        IUserReader userReader,
        IDomainEventDispatcher dispatcher,
        ILogger<RevokeTokenHandler> logger)
    {
        _userContext = userContext;
        _jwtRevocationStore = jwtRevocationStore;
        _dateTimeService = dateTimeService;
        _userReader = userReader;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task HandleAsync(
        RevokeTokenCommand command,
        CancellationToken cancellationToken)
    {
        // user ID
        var userId = _userContext.GuidUserId;

        // Jwt ID
        var jti = _userContext.JwtId;

        // Jwt expiration
        var expiresAt = _userContext.JwtExpiresAt
            ?? throw new AuthenticationRequiredException();

        // now
        var now = _dateTimeService.UtcNow;

        await _jwtRevocationStore.RevokeAsync(
            jti,
            expiresAt,
            cancellationToken);

        // Success log
        _logger.LogInformation(
            "JWT revoked for user {UserId} with JWT ID {JwtId}.",
            userId,
            jti);

        // Retrieve current user for domain event
        var user = await _userReader.GetUserAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new TokenRevokedEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);
    }
}
