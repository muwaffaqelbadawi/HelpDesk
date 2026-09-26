using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UserAccount.Admin.Update;

public sealed class UpdateUserAccountHandler :
    ICommandHandler<UpdateUserAccountCommand, UpdateUserAccountResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<UpdateUserAccountHandler> _logger;

    public UpdateUserAccountHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        IUserRepository userRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<UpdateUserAccountHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _userRepository = userRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<UpdateUserAccountResponse> HandleAsync(
        UpdateUserAccountCommand command,
        CancellationToken cancellationToken)
    {
        // Admin-initiated

        // admin
        var currentUserId = _userContext.GuidUserId;

        // desired user
        var userId = command.UserId;

        var now = _dateTimeService.UtcNow;

        // User repo
        var rows = await _userRepository.UpdateAsync(
            currentUserId: currentUserId,
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
            userId: command.UserId,
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
            @event: new UserAccountUpdatedEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        // Return response
        return new UpdateUserAccountResponse(
            UserRowVersion: userRowVersion,
            EmployeeRowVersion: employeeRowVersion!);
    }
}
