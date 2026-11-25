using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Users.TimeZones.Set;

public sealed class SetTimeZoneHandler
    : ICommandHandler<SetTimeZoneCommand, SetTimeZoneResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<SetTimeZoneHandler> _logger;

    public SetTimeZoneHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<SetTimeZoneHandler> logger)
    {
        _userContext = userContext;
        _userRepository = userRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<SetTimeZoneResponse> HandleAsync(
        SetTimeZoneCommand command,
        CancellationToken cancellationToken)
    {
        // user ID
        var userId = _userContext.GuidUserId;

        // TimeZone ID
        var timeZoneId = command.TimeZoneId;

        // user repository
        var rows = await _userRepository.UpdateTimeZoneAsync(
            userId,
            timeZoneId,
            cancellationToken);

        if (rows == 0)
        {
            throw new UserNotFoundException();
        }

        // user 
        var user = await _userReader.GetUserWithTimeZoneAsync(
            userId,
            cancellationToken)
                ?? throw new UserNotFoundException();

        if (user.TimeZone is null)
        {
            _logger.LogInformation(
                "The TimeZone for user: {user.TimeZoneId} is not set.",
                user.TimeZoneId);

            throw new InvalidOperationException($"The TimeZone is not set.");
        }

        // now
        var now = _dateTimeService.UtcNow;

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new TimeZoneSetEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("User: {userId} TimeZone changed successfully",
            userId);

        return new SetTimeZoneResponse(user.TimeZone.Name);
    }
}
