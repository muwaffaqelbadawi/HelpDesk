using HelpDesk.Shared.Exceptions;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Departments.Set;

public sealed class SetDepartmentHandler
    : ICommandHandler<SetDepartmentCommand, SetDepartmentResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<SetDepartmentHandler> _logger;

    public SetDepartmentHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<SetDepartmentHandler> logger)
    {
        _userContext = userContext;
        _userRepository = userRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<SetDepartmentResponse> HandleAsync(
        SetDepartmentCommand command,
        CancellationToken cancellationToken)
    {
        // updater ID
        var updaterUserId = _userContext.GuidUserId;

        // user ID
        var userId = command.UserId;

        // Department ID
        var departmentId = command.DepartmentId;

        // user 
        var user = await _userReader.GetUserWithDepartmentAsync(
            userId,
            cancellationToken)
                ?? throw new UserNotFoundException();

        // update department
        var updatedUserDepartmentRows = await _userRepository.UpdateDepartmentAsync(
            userId,
            departmentId,
            cancellationToken);

        if (updatedUserDepartmentRows == 0)
        {
            _logger.LogWarning(
                "Cannot update the department because the user: {userId} does not have an associated employee record.",
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
                "Cannot retrieve the department because user {UserId} has no associated employee.",
                user.Id);

            throw new InvalidOperationException(
                "Cannot retrieve the department because the user has no associated employee.");
        }

        if (user.Employee.Department is null)
        {
            _logger.LogWarning(
                "Employee associated with user {UserId} has no assigned department.",
                user.Id);

            throw new InvalidOperationException(
                "The employee does not have an assigned department.");
        }

        // now
        var now = _dateTimeService.UtcNow;

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new DepartmentSetEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("User: {userId} Department changed successfully",
            userId);

        return new SetDepartmentResponse(
            user.Employee.Department.Name);
    }
}
