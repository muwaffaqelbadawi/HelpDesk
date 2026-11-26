using HelpDesk.Shared.Exceptions;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Users.Languages.Set;

public sealed class SetPreferredLanguageHandler
    : ICommandHandler<SetPreferredLanguageCommand, SetPreferredLanguageResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<SetPreferredLanguageHandler> _logger;

    public SetPreferredLanguageHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<SetPreferredLanguageHandler> logger)
    {
        _userContext = userContext;
        _userRepository = userRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<SetPreferredLanguageResponse> HandleAsync(
        SetPreferredLanguageCommand command,
        CancellationToken cancellationToken)
    {
        // user ID
        var userId = _userContext.GuidUserId;

        // Preferred language ID
        var preferredLanguageId = command.PreferredLanguageId;

        // user repository
        var rows = await _userRepository.UpdatePreferredLanguageAsync(
            userId,
            preferredLanguageId,
            cancellationToken);

        if (rows == 0)
        {
            throw new UserNotFoundException();
        }

        // user 
        var user = await _userReader.GetUserWithPreferredLanguageAsync(
            userId,
            cancellationToken)
                ?? throw new UserNotFoundException();

        if (user.PreferredLanguage is null)
        {
            _logger.LogWarning(
                "User: {UserId} has no assigned PreferredLanguage.",
                user.Id);

            throw new InvalidOperationException(
                $"The user does not have an assigned sector.");
        }

        // now
        var now = _dateTimeService.UtcNow;

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new PreferredLanguageSetEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("User: {userId} Language changed successfully",
            userId);

        return new SetPreferredLanguageResponse(
            user.PreferredLanguage.Name);
    }
}
