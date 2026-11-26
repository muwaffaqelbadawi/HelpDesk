using HelpDesk.Shared.Exceptions;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Sectors.Set;

public sealed class SetSectorHandler
    : ICommandHandler<SetSectorCommand, SetSectorResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<SetSectorHandler> _logger;

    public SetSectorHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<SetSectorHandler> logger)
    {
        _userContext = userContext;
        _userRepository = userRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<SetSectorResponse> HandleAsync(
        SetSectorCommand command,
        CancellationToken cancellationToken)
    {
        // updater ID
        var updaterUserId = _userContext.GuidUserId;

        // user ID
        var userId = command.UserId;

        // Sector ID
        var sectorId = command.SectorId;

        // user 
        var user = await _userReader.GetUserWithSectorAsync(
            userId,
            cancellationToken)
                ?? throw new UserNotFoundException();

        // Update sector
        var updatedUserSectorRows = await _userRepository.UpdateSectorAsync(
            userId,
            sectorId,
            cancellationToken);

        if (updatedUserSectorRows == 0)
        {
            _logger.LogWarning(
                "Cannot update the sector because the user: {userId} does not have an associated employee record.",
                user.Id);

            throw new EmployeeNotFoundException();
        }

        if (user.Employee is null)
        {
            _logger.LogWarning(
                "Cannot retrieve the sector because user {UserId} has no associated employee.",
                user.Id);

            throw new InvalidOperationException(
                "Cannot retrieve the sector because the user has no associated employee.");
        }

        if (user.Employee.Sector is null)
        {
            _logger.LogWarning(
                "Employee associated with user {UserId} has no assigned sector.",
                user.Id);

            throw new InvalidOperationException(
                "The employee does not have an assigned sector.");
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

        // now
        var now = _dateTimeService.UtcNow;

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new SectorSetEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("User: {userId} Sector changed successfully",
            userId);

        return new SetSectorResponse(
            user.Employee.Sector.Name);
    }
}
