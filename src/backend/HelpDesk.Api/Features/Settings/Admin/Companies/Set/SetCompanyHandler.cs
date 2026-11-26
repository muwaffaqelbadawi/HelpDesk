using HelpDesk.Shared.Exceptions;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Companies.Set;

public sealed class SetCompanyHandler
    : ICommandHandler<SetCompanyCommand, SetCompanyResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<SetCompanyHandler> _logger;

    public SetCompanyHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<SetCompanyHandler> logger)
    {
        _userContext = userContext;
        _userRepository = userRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<SetCompanyResponse> HandleAsync(
        SetCompanyCommand command,
        CancellationToken cancellationToken)
    {
        // updater ID
        var updaterUserId = _userContext.GuidUserId;

        // user ID
        var userId = command.UserId;

        // company ID
        var companyId = command.CompanyId;

        // user 
        var user = await _userReader.GetUserWithCompanyAsync(
            userId,
            cancellationToken)
                ?? throw new UserNotFoundException();

        // update company
        var updatedUserCompanyRows = await _userRepository.UpdateCompanyAsync(
            userId,
            companyId,
            cancellationToken);

        if (updatedUserCompanyRows == 0)
        {
            _logger.LogWarning(
                "Cannot update the company because the user: {userId} does not have an associated employee record.",
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
                "Cannot retrieve the company because user {UserId} has no associated employee.",
                user.Id);

            throw new InvalidOperationException(
                "Cannot retrieve the company because the user has no associated employee.");
        }

        if (user.Employee.Company is null)
        {
            _logger.LogWarning(
                "Employee associated with user {UserId} has no assigned company.",
                user.Id);

            throw new InvalidOperationException(
                "The employee does not have an assigned company.");
        }

        // now
        var now = _dateTimeService.UtcNow;

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new CompanySetEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("User: {userId} company changed successfully",
            userId);

        return new SetCompanyResponse(
            user.Employee.Company.Name);
    }
}
