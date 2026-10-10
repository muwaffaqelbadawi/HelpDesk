using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ChangePassword;

public sealed class ChangePasswordHandler
    : ICommandHandler<ChangePasswordCommand, ChangePasswordResponse>
{
    private readonly IDateTimeService _dateTimeService;
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly IChangePasswordService _changePasswordService;
    private readonly ITokenService _tokenService;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<ChangePasswordHandler> _logger;

    public ChangePasswordHandler(
        IDateTimeService dateTimeService,
        IUserContext userContext,
        IUserProvider userProvider,
        IChangePasswordService changePasswordService,
        ITokenService tokenService,
        IUserRepository userRepository,
        IUserReader userReader,
        IDomainEventDispatcher dispatcher,
        ILogger<ChangePasswordHandler> logger)
    {
        _dateTimeService = dateTimeService;
        _userContext = userContext;
        _userProvider = userProvider;
        _changePasswordService = changePasswordService;
        _tokenService = tokenService;
        _userRepository = userRepository;
        _userReader = userReader;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<ChangePasswordResponse> HandleAsync(
        ChangePasswordCommand command,
        CancellationToken cancellationToken)
    {
        // Self-service
        var userId = _userContext.GuidUserId;

        // Resolve currentUser with ID
        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        var currentPassword = command.CurrentPassword;
        var newPassword = command.NewPassword;
        var confirmedPassword = command.ConfirmNewPassword;

        if (string.IsNullOrWhiteSpace(currentPassword))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["currentPassword"] = ["currentPassword is invalid or missing."]
                });
        }

        if (string.IsNullOrWhiteSpace(newPassword))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["newPassword"] = ["newPassword is invalid or missing."]
                });
        }

        if (string.IsNullOrWhiteSpace(confirmedPassword))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["confirmedPassword"] = ["confirmedPassword is invalid or missing."]
                });
        }

        var changePasswordResult = await _changePasswordService.ChangePasswordAsync(
            user,
            currentPassword,
            newPassword);

        // Check if the password change succeeded
        if (!changePasswordResult.Succeeded)
        {
            _logger.LogWarning(
                "Failed to change password for user: {UserId}. Errors: {Errors}",
                userId,
                string.Join(", ", changePasswordResult.Errors.First().Description));

            throw new PasswordChangeFailedException(
                errors: new()
                {
                    ["password"] =
                    [
                        changePasswordResult.Errors.First().Description
                    ],
                });
        }

        // now
        var now = _dateTimeService.UtcNow;

        var rows = await _userRepository.UpdatePasswordAsync(
            userId,
            now,
            cancellationToken);

        if (rows == 0)
        {
            throw new ConcurrencyException(
                $"Password for user {userId} was modified or deleted by another user.");
        }

        // session ID
        var sessionId = _userContext.SessionId;

        // Issue new token
        var token = await _tokenService.IssueAfterPasswordChangeAsync(
            user,
            sessionId,
            cancellationToken);

        // Success log
        _logger.LogInformation("User {UserId} changed password and received new tokens",
            userId);

        // Get user
        var userAccountData = await _userReader.GetByIdAsync(
            userId,
            cancellationToken);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new PasswordChangedEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        return new ChangePasswordResponse(
            userAccountData,
            token);
    }
}
