using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed class ResetPasswordHandler
    : ICommandHandler<ResetPasswordCommand, ResetPasswordResponse>
{
    private readonly IUserContext _userContext;
    private readonly IResetPasswordService _resetPasswordService;
    private readonly IUserRepository _userRepository;
    private readonly ITokenService _tokenService;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<ResetPasswordHandler> _logger;

    public ResetPasswordHandler(
        IUserContext userContext,
        IResetPasswordService resetPasswordService,
        IUserRepository userRepository,
        ITokenService tokenService,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<ResetPasswordHandler> logger)
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

    public async Task<ResetPasswordResponse> HandleAsync(
        ResetPasswordCommand command,
        CancellationToken cancellationToken)
    {
        var userId = command.UserId;

        // user
        var user = await _userReader.GetUserAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        var result = await _resetPasswordService.ResetPasswordAsync(
            user,
            command.ResetToken,
            command.NewPassword);

        if (!result.Succeeded)
        {
            _logger.LogWarning(
                "Failed to reset password for user: {ser}." +
                "Errors: {Errors}.",
                userId,
                string.Join(", ", result.Errors.First().Description));

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

        // update password
        var rows = await _userRepository.UpdatePasswordAsync(
            userId,
            now,
            cancellationToken);

        if (rows == 0)
        {
            throw new ConcurrencyException(
                $"Password for user {userId} was modified or deleted by another user.");
        }

        // User repo
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

        // Successful log
        _logger.LogInformation(
            "User: {user} password was reset successfully.",
            userId);

        // Get user
        var userAccountData = await _userReader.GetByIdAsync(
            userId: userId,
            cancellationToken: cancellationToken);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new PasswordResetEvent(
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        return new ResetPasswordResponse(
            userAccountData,
            token);
    }
}
