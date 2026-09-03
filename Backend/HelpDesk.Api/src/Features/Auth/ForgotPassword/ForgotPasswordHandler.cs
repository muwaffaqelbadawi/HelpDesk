using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Cors;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Links;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Features.Auth.ForgotPassword;

public sealed class ForgotPasswordHandler :
    ICommandHandler<ForgotPasswordCommand, ForgotPasswordResponse>
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IQueueEmailService _queueEmailService;
    private readonly CorsOptions _corsOptions;
    private readonly ILogger<ForgotPasswordHandler> _logger;

    public ForgotPasswordHandler(
        UserManager<ApplicationUser> userManager,
        IQueueEmailService queueEmailService,
        IOptions<CorsOptions> corsOptions,
        ILogger<ForgotPasswordHandler> logger)
    {
        _userManager = userManager;
        _queueEmailService = queueEmailService;
        _corsOptions = corsOptions.Value;
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

        var token = await _userManager.GeneratePasswordResetTokenAsync(user);

        var baseUrl = _corsOptions.Origins.Single();

        var resetLink = PasswordResetLink.Build(
            baseUrl: baseUrl,
            userId: user.Id,
            token: token);

        if (string.IsNullOrWhiteSpace(user.UserName)
            || string.IsNullOrWhiteSpace(user.Email))
        {
            _logger.LogWarning(
                "Password reset requested but user has missing username or email for user {UserId}",
                user.Id);

            return new ForgotPasswordResponse(
                Message: "If the email is associated with an account, a password reset email has been sent.");
        }

        await _queueEmailService.ResetPasswordEmail(
            userName: user.UserName,
            recipientEmail: user.Email,
            resetLink: resetLink,
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("Password reset email queued for user {UserId}", user.Id);

        return new ForgotPasswordResponse(
            Message: "If the email is associated with an account, a password reset email has been sent.");
    }
}
