using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed class ResetPasswordHandler :
    ICommandHandler<ResetPasswordCommand, ResetPasswordResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly IResetPasswordService _resetPasswordService;
    private readonly IUserRepository _userRepository;
    private readonly ITokenService _tokenService;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<ResetPasswordHandler> _logger;

    public ResetPasswordHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        IResetPasswordService resetPasswordService,
        IUserRepository userRepository,
        ITokenService tokenService,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<ResetPasswordHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
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
        // Anonymous service
        var userId = command.UserId;

        //Get current user
        var user = await _userProvider.GetUserAsync(userId)
            ?? throw new AuthenticationRequiredException();

        var resetToken = command.ResetToken;
        var newPassword = command.NewPassword;
        var confirmedPassword = command.ConfirmNewPassword;

        if (string.IsNullOrWhiteSpace(resetToken))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["resetToken"] = ["resetToken is invalid or missing."]
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

        var result = await _resetPasswordService.ResetPasswordAsync(
            user,
            resetToken,
            newPassword);

        if (!result.Succeeded)
        {
            _logger.LogWarning(
                "Failed to reset password for user: {ser}." +
                "Errors: {Errors}.",
                user.Id,
                string.Join(", ", result.Errors.Select(e => e.Description)));

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

        user.LastPasswordChangedAt = _dateTimeService.UtcNow;
        user.LastPasswordChangedById = user.Id;
        user.MustResetPassword = false;

        // User repo
        await _userRepository.UpdateAsync(
            user,
            cancellationToken);

        var sessionId = _userContext.SessionId;

        // Issue new token
        var token = await _tokenService.IssueAfterResetPasswordAsync(
            user,
            sessionId,
            cancellationToken);

        // Successful log
        _logger.LogInformation(
            "User: {user} password was reset successfully.",
            user.Id);

        // Get user
        var userAccountData = await _userReader.GetByIdAsync(
            userId: user.Id,
            cancellationToken: cancellationToken);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new PasswordResetEvent(
                User: user,
                OccurredAt: _dateTimeService.UtcNow),
            cancellationToken: cancellationToken);


        return new ResetPasswordResponse(
            UserAccountData: userAccountData,
            Token: token);
    }
}
