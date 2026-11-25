using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Users.PhoneNumbers.Set;

public sealed class SetPhoneNumberHandler
    : ICommandHandler<SetPhoneNumberCommand, SetPhoneNumberResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<SetPhoneNumberHandler> _logger;

    public SetPhoneNumberHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<SetPhoneNumberHandler> logger)
    {
        _userContext = userContext;
        _userRepository = userRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<SetPhoneNumberResponse> HandleAsync(
        SetPhoneNumberCommand command,
        CancellationToken cancellationToken)
    {
        // user ID
        var userId = _userContext.GuidUserId;

        // phone number
        var phoneNumber = command.PhoneNumber;

        // user repository
        var rows = await _userRepository.UpdatePhoneNumberAsync(
            userId,
            phoneNumber,
            cancellationToken);

        if (rows == 0)
        {
            throw new UserNotFoundException();
        }

        // user 
        var user = await _userReader.GetUserWithPhoneNumberAsync(
            userId,
            cancellationToken)
                ?? throw new UserNotFoundException();

        if (user.PhoneNumber is null)
        {
            _logger.LogWarning(
                "User: {UserId} has no assigned PhoneNumber.",
                user.Id);

            throw new InvalidOperationException(
                $"The user does not have an assigned sector.");
        }

        // --------- Confirm phone number process  ---------

        //var token = await userManager.GenerateChangePhoneNumberTokenAsync(
        //    user,
        //    phoneNumber);

        //await smsSender.SendAsync(
        //    phoneNumber,
        //    $"Your HelpDesk verification code is: {token}",
        //    cancellationToken);

        //var result = await userManager.ChangePhoneNumberAsync(
        //    user,
        //    phoneNumber,
        //    token);

        //if (!result.Succeeded)
        //{
        //    // Handle Identity errors.
        //}

        // now
        var now = _dateTimeService.UtcNow;

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new PhoneNumberSetEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("User: {userId} Language changed successfully",
            userId);

        return new SetPhoneNumberResponse(phoneNumber);
    }
}
