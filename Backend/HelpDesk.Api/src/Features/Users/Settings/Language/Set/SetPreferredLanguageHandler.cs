using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.Settings.Language.Set;

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

        // Language ID
        var preferredLanguageId = command.PreferredLanguageId;

        // Check for Language existents
        if (!await _userReader.IsLanguageExistAndActiveAsync(
            preferredLanguageId,
            cancellationToken))
        {
            _logger.LogWarning(
                "The selected Language: {preferredLanguageId} is unavailable or inactive.",
                preferredLanguageId);

            throw new ValidationException(
                errors: new()
                {
                    ["preferredLanguageId"] =
                    [$"The selected Language is unavailable or inactive."],
                });
        }

        // user repository
        var rows = await _userRepository.UpdatePreferredLanguageAsync(
            userId,
            preferredLanguageId,
            cancellationToken);

        if (rows == 0)
        {
            throw new UserNotFoundException(userId);
        }

        // user 
        var user = await _userReader.GetUserWithPreferredLanguageAsync(
            userId,
            cancellationToken)
                ?? throw new UserNotFoundException(userId);

        if (user.PreferredLanguage is null)
        {
            _logger.LogInformation(
                "The Preferred Language for user: {user.Id} is not set.",
                user.Id);

            throw new InvalidOperationException(
                $"The Preferred Language is not set.");
        }

        // now
        var now = _dateTimeService.UtcNow;

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new UserPreferredLanguageSetEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("User: {userId} Language changed successfully",
            userId);

        return new SetPreferredLanguageResponse(user.PreferredLanguage.Name);
    }
}
