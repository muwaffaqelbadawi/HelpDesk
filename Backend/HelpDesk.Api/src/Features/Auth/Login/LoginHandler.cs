using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Login;

public sealed class LoginHandler :
    ICommandHandler<LoginCommand, LoginResponse>
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

        // Issue new token
        var token = await _tokenService.IssueAfterLoginAsync(
            user,
            cancellationToken);

        // Get user
        var userAccountData = await _userReader.GetByIdAsync(
            userId: user.Id,
            cancellationToken: cancellationToken);

        _logger.LogInformation(
            "User {userId} logged in successfully",
            user.Id);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new UserLoggedInEvent(
                UserId: user.Id,
                OccurredAt: _dateTimeService.UtcNow),
            cancellationToken: cancellationToken);




        // Add someone login to your account email later

        return new LoginResponse(
            UserAccountData: userAccountData,
            Token: token);
    }
}
