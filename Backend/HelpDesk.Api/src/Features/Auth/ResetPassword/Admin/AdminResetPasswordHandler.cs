using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ResetPassword.Admin;

public sealed class AdminResetPasswordHandler
    : ICommandHandler<AdminResetPasswordCommand, AdminResetPasswordResponse>
{
    private readonly IUserContext _userContext;
    private readonly IResetPasswordService _resetPasswordService;
    private readonly IUserRepository _userRepository;
    private readonly ITokenService _tokenService;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<AdminResetPasswordHandler> _logger;

    public AdminResetPasswordHandler(
        IUserContext userContext,
        IResetPasswordService resetPasswordService,
        IUserRepository userRepository,
        ITokenService tokenService,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<AdminResetPasswordHandler> logger)
    {
        _userContext = userContext;
        _resetPasswordService = resetPasswordService;
        _userRepository = userRepository;
        _tokenService = tokenService;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<AdminResetPasswordResponse> HandleAsync(
        AdminResetPasswordCommand command,
        CancellationToken cancellationToken)
    {
        // admin ID
        var currentUserId = _userContext.GuidUserId;

        // user ID
        var userId = command.UserId;

        // user
        var user = await _userReader.GetUserAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        // reset token
        var resetToken = await _resetPasswordService.GeneratePasswordAsync(user);

        // new password
        var newPassword = command.NewPassword;

        var result = await _resetPasswordService.ResetPasswordAsync(
            user,
            resetToken,
            newPassword);

        // Check if the password reset succeeded
        if (!result.Succeeded)
        {
            _logger.LogWarning(
                "Failed to reset password for user {UserId} by admin {admin}. Errors: {Errors}",
                user.Id,
                currentUserId,
                string.Join(", ", result.Errors.First().Description));

            // Check for specific error types
            if (result.Errors.Any(e => e.Code == "InvalidToken"))
            {
                throw new AuthenticationFailedException("Reset token is invalid or expired.");
            }

            throw new PasswordResetFailedException(
                errors: new()
                {
                    ["password"] =
                    [
                        result.Errors.First().Description
                    ],
                });
        }

        // now
        var now = _dateTimeService.UtcNow;

        // rows
        var rows = await _userRepository.ResetPasswordAsync(
            userId,
            now,
            cancellationToken);

        if (rows == 0)
        {
            throw new ConcurrencyException(
                $"Password for user {userId} was reset by another user.");
        }

        await _userRepository.UpdateAsync(
            user,
            cancellationToken);

        // session ID
        var sessionId = _userContext.SessionId;

        // Issue new token
        var token = await _tokenService.IssueAfterResetPasswordAsync(
            user,
            sessionId,
            now,
            cancellationToken);

        // user account data
        var userAccountData = await _userReader.GetByIdAsync(
            userId,
            cancellationToken);

        // Successful log
        _logger.LogInformation(
            "User {UserId} password was reset successfully by admin: {admin}",
            userId,
            currentUserId);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new AdminPasswordResetEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        return new AdminResetPasswordResponse(
            userAccountData,
            token);
    }
}
