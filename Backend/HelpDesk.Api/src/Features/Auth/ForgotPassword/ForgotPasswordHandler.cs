using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ForgotPassword;

public sealed class ForgotPasswordHandler
    : ICommandHandler<ForgotPasswordCommand, ForgotPasswordResponse>
{
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<ForgotPasswordHandler> _logger;

    public ForgotPasswordHandler(
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<ForgotPasswordHandler> logger)
    {
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<ForgotPasswordResponse> HandleAsync(
        ForgotPasswordCommand command,
        CancellationToken cancellationToken)
    {
        // user
        var user = await _userReader.GetUserByEmailAsync(command.Email);

        if (user is null)
        {
            // Prevent enumeration
            _logger.LogInformation(
                "Password reset requested for non-existent email: {Email}", command.Email);

            return new ForgotPasswordResponse(
                Message: "If the email is associated with an account, a password reset email has been sent.");
        }

        if (string.IsNullOrWhiteSpace(user.UserName)
            || string.IsNullOrWhiteSpace(user.Email))
        {
            _logger.LogWarning(
                "Password reset requested but user has missing username or email for user {UserId}",
                user.Id);

            return new ForgotPasswordResponse(
                Message: "If the email is associated with an account, a password reset email has been sent.");
        }

        // Successful log
        _logger.LogInformation("Password for user: {user} has been reset successfully",
            user.Id);

        // now
        var now = _dateTimeService.UtcNow;

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new PasswordForgottenEvent(
                ResetToken: command.Token,
                NewPassword: command.NewPassword,
                ConfirmNewPassword: command.ConfirmNewPassword,
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        return new ForgotPasswordResponse(
            Message: "If the email is associated with an account, " +
            "a password reset email has been sent.");
    }
}
