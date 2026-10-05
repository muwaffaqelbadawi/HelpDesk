using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UpdateMy;

public sealed class UpdateMyUserAccountHandler
    : ICommandHandler<UpdateMyUserAccountCommand, UpdateMyUserAccountResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<UpdateMyUserAccountHandler> _logger;

    public UpdateMyUserAccountHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        IUserRepository userRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<UpdateMyUserAccountHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _userRepository = userRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<UpdateMyUserAccountResponse> HandleAsync(
        UpdateMyUserAccountCommand command,
        CancellationToken cancellationToken)
    {
        // Self-service
        var userId = _userContext.GuidUserId;

        var now = _dateTimeService.UtcNow;

        // User repo
        var rows = await _userRepository.UpdateCurrentAsync(
            userId: userId,
            userName: command.UserName,
            email: command.Email,
            fullEnName: command.FullEnName,
            fullArName: command.FullArName,
            now: now,
            employeeRowVersion: command.EmployeeRowVersion,
            userRowVersion: command.UserRowVersion,
            cancellationToken: cancellationToken);

        // check affected rows
        if (rows == 0)
        {
            throw new ConcurrencyException(
                $"The user account associated with user {userId} was modified or deleted by another user.");
        }

        // User reader
        var newRowVersion = await _userReader.GetNewRowAsync(
            userId: userId,
            cancellationToken: cancellationToken);

        var userRowVersion = newRowVersion.UserRowVersion;
        var employeeRowVersion = newRowVersion.EmployeeRowVersion;

        // Successful log
        _logger.LogInformation(
            "The user account associate with user {userId} was updated successfully",
            userId);

        // Retrieve current user for domain event
        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new AuthenticationRequiredException();

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new MyUserAccountUpdatedEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);


        return new UpdateMyUserAccountResponse(
            UserRowVersion: userRowVersion,
            EmployeeRowVersion: employeeRowVersion!);
    }
}
