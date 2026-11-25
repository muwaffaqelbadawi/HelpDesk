using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Users.Countries.Set;

public sealed class SetCountryHandler
    : ICommandHandler<SetCountryCommand, SetCountryResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<SetCountryHandler> _logger;

    public SetCountryHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<SetCountryHandler> logger)
    {
        _userContext = userContext;
        _userRepository = userRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<SetCountryResponse> HandleAsync(
        SetCountryCommand command,
        CancellationToken cancellationToken)
    {
        // user ID
        var userId = _userContext.GuidUserId;

        // Country ID
        var countryId = command.CountryId;

        // user repository
        var rows = await _userRepository.UpdateCountryAsync(
            userId,
            countryId,
            cancellationToken);

        if (rows == 0)
        {
            throw new UserNotFoundException();
        }

        // user 
        var user = await _userReader.GetUserWithCountryAsync(
            userId,
            cancellationToken)
                ?? throw new UserNotFoundException();

        if (user.Employee is null)
        {
            _logger.LogWarning(
                "Cannot retrieve the country because user {UserId} has no associated employee.",
                user.Id);

            throw new InvalidOperationException(
                "Cannot retrieve the country because the user has no associated employee.");
        }

        if (user.Employee.Country is null)
        {
            _logger.LogWarning(
                "Employee associated with user {UserId} has no assigned country.",
                user.Id);

            throw new InvalidOperationException(
                "The employee does not have an assigned country.");
        }

        // now
        var now = _dateTimeService.UtcNow;

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new CountrySetEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("User: {userId} Country changed successfully",
            userId);

        return new SetCountryResponse(
            user.Employee.Country.Name);
    }
}
