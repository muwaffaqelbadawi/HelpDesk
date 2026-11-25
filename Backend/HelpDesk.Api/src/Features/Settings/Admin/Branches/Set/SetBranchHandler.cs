using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Admin.Branches.Set;

public sealed class SetBranchHandler
    : ICommandHandler<SetBranchCommand, SetBranchResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<SetBranchHandler> _logger;

    public SetBranchHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<SetBranchHandler> logger)
    {
        _userContext = userContext;
        _userRepository = userRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<SetBranchResponse> HandleAsync(
        SetBranchCommand command,
        CancellationToken cancellationToken)
    {
        // updater ID
        var updaterUserId = _userContext.GuidUserId;

        // user ID
        var userId = command.UserId;

        // branch ID
        var branchId = command.BranchId;

        // user 
        var user = await _userReader.GetUserWithBranchAsync(
            userId,
            cancellationToken)
                ?? throw new UserNotFoundException();

        // user branch
        var updatedUserBranchRows = await _userRepository.UpdateBranchAsync(
            userId,
            branchId,
            cancellationToken);

        if (updatedUserBranchRows == 0)
        {
            _logger.LogWarning(
                "Cannot update the branch because the user: {userId} does not have an associated employee record.",
                user.Id);

            throw new EmployeeNotFoundException();
        }

        // updated by user
        var updatedUserRows = await _userRepository.UpdateByIdAsync(
            userId,
            updaterUserId,
            cancellationToken);

        if (updatedUserRows == 0)
        {
            throw new UserNotFoundException();
        }

        if (user.Employee is null)
        {
            _logger.LogWarning(
                "Cannot retrieve the branch because user {UserId} has no associated employee.",
                user.Id);

            throw new InvalidOperationException(
                "Cannot retrieve the branch because the user has no associated employee.");
        }

        if (user.Employee.Branch is null)
        {
            _logger.LogWarning(
                "Employee associated with user {UserId} has no assigned branch.",
                user.Id);

            throw new InvalidOperationException(
                "The employee does not have an assigned branch.");
        }

        // now
        var now = _dateTimeService.UtcNow;

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new BranchSetEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("User: {userId} branch changed successfully",
            userId);

        return new SetBranchResponse(
            user.Employee.Branch.Name);
    }
}
