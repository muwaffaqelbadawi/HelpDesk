using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Login;

public sealed class LoginHandler
    : ICommandHandler<LoginCommand, LoginResponse>
{
    private readonly IIdentityResolver _identityResolver;
    private readonly IUserSessionService _userSessionService;
    private readonly ITokenIssuer _tokenIssuer;
    private readonly IUserLoginRepository _userLoginRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<LoginHandler> _logger;

    public LoginHandler(
        IIdentityResolver identityResolver,
        IUserSessionService userSessionService,
        ITokenIssuer tokenIssuer,
        IUserLoginRepository userLoginRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<LoginHandler> logger)
    {
        _identityResolver = identityResolver;
        _userSessionService = userSessionService;
        _tokenIssuer = tokenIssuer;
        _userLoginRepository = userLoginRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<LoginResponse> HandleAsync(
        LoginCommand command,
        CancellationToken cancellationToken)
    {
        // 1- Validate credentials
        var user = await _identityResolver.ResolveIdentity(
            command,
            cancellationToken);

        await _identityResolver.ResolvePassword(
            user,
            command);

        // 2- Generate userSessionId
        var userSessionId = Guid.NewGuid();

        // now
        var now = _dateTimeService.UtcNow;

        // 3- Create the UserSession object.
        var userSession = _userSessionService.CreateUserSession(
            userId: user.Id,
            userSessionId: userSessionId,
            staySignedIn: command.StaySignedIn,
            now: now);

        // 4- Create the JWT using the same session ID
        var jwt = _tokenIssuer.IssueTokenObject(
            user,
            userSessionId,
            userSession.ExpiresAt
                ?? throw new InvalidOperationException(
                    "A user session must have an expiration."));

        // 5- Persist the refresh token returned to the client
        var refreshToken = _tokenIssuer.CreateRefreshTokenObject(
            user,
            userSessionId,
            jwt);

        // 6- persist the session + refresh token (atomic)
        await _userLoginRepository.AddAsync(
            userSession,
            refreshToken,
            cancellationToken);

        // Consider changing the log structure
        _logger.LogInformation(
            "User {userId} logged in successfully",
            user.Id);

        // Get user
        var userAccountData = await _userReader.GetByIdAsync(
            user.Id,
            cancellationToken);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new LoginEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        return new LoginResponse(
            userAccountData,
            jwt);
    }
}
