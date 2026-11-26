using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Infrastructure.Services.Cors;
using HelpDesk.Infrastructure.Services.ResetPassword;
using HelpDesk.Shared.Exceptions;
using HelpDesk.Shared.Interfaces;
using HelpDesk.Shared.Links;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace HelpDesk.Features.Users.Create;

public sealed class UserAccountCreatedEmailEventHandler(
    UserManager<ApplicationUser> userManager,
    IOptions<CorsOptions> corsOptions,
    IQueueEmailService queueEmailService,
    IUserContext userContext,
    IDateTimeService dateTimeService,
    IOptions<ResetPasswordOptions> resetPasswordOptions,
    ILogger<UserAccountCreatedEmailEventHandler> logger)
        : IDomainEventHandler<UserAccountCreatedEvent>
{
    public async Task HandleAsync(
        UserAccountCreatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        var userId = @event.User.Id;

        logger.LogInformation("{handler}: Handling login event for user {UserId}",
            nameof(UserAccountCreatedEmailEventHandler),
            userId);

        var userName = @event.User.UserName;
        var email = @event.User.Email;

        if (string.IsNullOrWhiteSpace(userName))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["username"] = ["The entered username is invalid."]
                });
        }

        if (string.IsNullOrWhiteSpace(email))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["email"] = ["The entered email is invalid."]
                });
        }

        // password reset token
        var passwordResetToken = await userManager
            .GeneratePasswordResetTokenAsync(@event.User);

        // Build reset password link
        var baseUrl = corsOptions.Value.Origins.Single();

        var resetPasswordLink = ResetPasswordLink.Build(
            baseUrl: baseUrl,
            userId: userId,
            token: passwordResetToken);

        // expired reset password link
        var linkExpiration =
            dateTimeService.UtcNow
            .Add(resetPasswordOptions.Value.ResetTokenLifetime)
            .ToString("dd MMM yyyy, hh:mm tt zzz");

        await queueEmailService.WelcomeEmail(
            userId: userId,
            userName: userName,
            recipientEmail: email,
            tempPassword: @event.TempPassword,
            resetPasswordLink: resetPasswordLink,
            linkExpiration: linkExpiration,
            traceId: userContext.TraceId,
            correlationId: userContext.CorrelationId,
            cancellationToken: cancellationToken);

        logger.LogInformation("Welcome email for user {user} queued successfully.",
            userId);
    }
}
