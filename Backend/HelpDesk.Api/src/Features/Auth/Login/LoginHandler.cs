using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Login;

public sealed class LoginHandler
    : ICommandHandler<LoginCommand, LoginResponse>
{
    private readonly IIdentityResolver _identityResolver;
    private readonly ITokenService _tokenService;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<LoginHandler> _logger;

    public LoginHandler(
        IIdentityResolver identityResolver,
        ITokenService tokenService,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<LoginHandler> logger)
    {
        _identityResolver = identityResolver;
        _tokenService = tokenService;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<LoginResponse> HandleAsync(
        LoginCommand command,
        CancellationToken cancellationToken)
    {
        // Resolve identity
        var user = await _identityResolver.ResolveIdentity(
            command,
            cancellationToken);

        // Resolve password
        await _identityResolver.ResolvePassword(
            user,
            command);

        var sessionId = Guid.NewGuid();

        // Issue new token
        var token = await _tokenService.IssueAfterLoginAsync(
            user,
            sessionId,
            cancellationToken);

        // Successful log
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
                OccurredAt: _dateTimeService.UtcNow,
                StaySignedIn: command.StaySignedIn,
                SessionId: sessionId),
            cancellationToken: cancellationToken);

        return new LoginResponse(
            UserAccountData: userAccountData,
            Token: token);
    }
}
