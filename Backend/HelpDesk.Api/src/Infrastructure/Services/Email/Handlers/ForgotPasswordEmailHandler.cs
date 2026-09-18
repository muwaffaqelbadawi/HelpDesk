using HelpDesk.src.Features.Auth.ForgotPassword;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Cors;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Links;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.Email.Handlers;

public sealed class ForgotPasswordEmailHandler(
    UserManager<ApplicationUser> userManager,
    IOptions<CorsOptions> corsOptions,
    IQueueEmailService queueEmailService,
    IUserContext userContext,
    ILogger<ForgotPasswordEmailHandler> logger)
        : IDomainEventHandler<PasswordForgottenEvent>
{
    public async Task HandleAsync(
        PasswordForgottenEvent @event,
        CancellationToken cancellationToken = default)
    {
        logger.LogInformation("{handler}: Handling login event for user {UserId}",
            nameof(ForgotPasswordEmailHandler),
            @event.User.Id);

        // password reset token
        var passwordResetToken = await userManager
            .GeneratePasswordResetTokenAsync(@event.User);

        // Build password reset link
        var baseUrl = corsOptions.Value.Origins.Single();

        var resetLink = PasswordResetLink.Build(
            baseUrl: baseUrl,
            userId: @event.User.Id,
            token: passwordResetToken);

        var userName = @event.User.UserName;
        var email = @event.User.Email;

        if (string.IsNullOrWhiteSpace(userName))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["InvalidUserName"] = ["The entered username is invalid."]
                });
        }

        if (string.IsNullOrWhiteSpace(email))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["InvalidEmail"] = ["The entered email is invalid."]
                });
        }

        await queueEmailService.ResetPasswordEmail(
            userId: @event.User.Id,
            userName: userName,
            recipientEmail: email,
            resetLink: resetLink,
            traceId: userContext.TraceId,
            correlationId: userContext.CorrelationId,
            cancellationToken: cancellationToken);

        logger.LogInformation("Password reset email for user {UserId} queued successfully.",
            @event.User.Id);
    }
}
