using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Auth.ForgotPassword;

public sealed class ForgotPasswordHandler :
    ICommandHandler<ForgotPasswordCommand, ForgotPasswordResponse>
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IBackgroundTaskQueue _taskQueue;
    private readonly ILogger<ForgotPasswordHandler> _logger;

    public ForgotPasswordHandler(
        UserManager<ApplicationUser> userManager,
        IBackgroundTaskQueue taskQueue,
        ILogger<ForgotPasswordHandler> logger)
    {
        _userManager = userManager;
        _taskQueue = taskQueue;
        _logger = logger;
    }

    public async Task<ForgotPasswordResponse> HandleAsync(
        ForgotPasswordCommand command,
        CancellationToken cancellationToken)
    {
        //self - service ForgotPassword

        // The user is anonymous

        // Find user by email (normalized)
        var user = await _userManager.FindByEmailAsync(command.Email);

        // Always return success to prevent email enumeration
        if (user is null)
        {
            _logger.LogInformation(
                "Password reset requested for non-existent email: {Email}", command.Email);

            return new ForgotPasswordResponse("If the email exists, a reset link has been sent.");
        }

        var userId = user.Id;
        var email = user.Email!;
        var userName = user.UserName;

        // Generate password reset token
        var token = await _userManager.GeneratePasswordResetTokenAsync(user);

        // Build reset link
        var resetLink = $"https://your-app.com/reset-password?userId={user.Id}&token={Uri.EscapeDataString(token)}";

        // Enqueue background job to send email (Producer)
        await _taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.SendPasswordResetLinkAsync(
                userId,
                userName,
                email,
                resetLink,
                cancellationToken);
        }, cancellationToken);

        // Successful log
        _logger.LogInformation("Password reset email queued for user {UserId}", user.Id);

        return new ForgotPasswordResponse("If the email exists, a reset link has been sent.");
    }
}
