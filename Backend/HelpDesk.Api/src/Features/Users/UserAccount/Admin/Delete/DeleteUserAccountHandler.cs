using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UserAccount.Admin.Delete;

public sealed class DeleteUserAccountHandler :
    ICommandHandler<DeleteUserAccountCommand>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly IUserRepository _userRepository;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<DeleteUserAccountHandler> _logger;

    public DeleteUserAccountHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        IUserRepository userRepository,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<DeleteUserAccountHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _userRepository = userRepository;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task HandleAsync(
        DeleteUserAccountCommand command,
        CancellationToken cancellationToken)
    {
        // admin-initiated
        var currentUserId = _userContext.GuidUserId;

        // user
        var userId = command.UserId;

        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new AuthenticationRequiredException();

        var now = _dateTimeService.UtcNow;

        // User repo
        await _userRepository.DeleteAsync(
            user: user,
            currentUserId: currentUserId,
            now: now,
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation(
            "User: {user} password was deleted successfully.",
            user.Id);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new UserAccountDeletedEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);
    }
}
