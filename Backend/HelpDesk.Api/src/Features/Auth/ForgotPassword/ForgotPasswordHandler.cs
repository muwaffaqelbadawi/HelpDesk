using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Auth.ForgotPassword;

public sealed class ForgotPasswordHandler :
    ICommandHandler<ForgotPasswordCommand, ForgotPasswordResponse>
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<ForgotPasswordHandler> _logger;

    public ForgotPasswordHandler(
        UserManager<ApplicationUser> userManager,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<ForgotPasswordHandler> logger)
    {
        _userManager = userManager;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<ForgotPasswordResponse> HandleAsync(
        ForgotPasswordCommand command,
        CancellationToken cancellationToken)
    {
        var user = await _userManager.FindByEmailAsync(command.Email);

        if (user is null)
        {
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

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new PasswordForgottenEvent(
                User: user,
                OccurredAt: _dateTimeService.UtcNow),
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("Password for user: {user} has been reset successfully",
            user.Id);

        return new ForgotPasswordResponse(
            Message: "If the email is associated with an account, a password reset email has been sent.");
    }
}
