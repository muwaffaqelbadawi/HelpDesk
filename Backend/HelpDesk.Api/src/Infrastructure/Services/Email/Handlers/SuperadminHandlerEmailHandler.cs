using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Cors;
using HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Links;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.Email.Handlers;

public sealed class SuperadminHandlerEmailHandler(
    UserManager<ApplicationUser> userManager,
    IOptions<CorsOptions> corsOptions,
    IQueueEmailService queueEmailService,
    IUserContext userContext,
    ILogger<SuperadminHandlerEmailHandler> logger)
        : IDomainEventHandler<SuperadminCreatedEvent>
{
    public async Task HandleAsync(
        SuperadminCreatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        // In the production environment for Superadmin Prefer controlled
        // bootstrap/provisioning process SSO

        logger.LogInformation("SuperadminHandlerEmailHandler:" +
            "Handling user account created event for user {UserId}",
            @event.User.Id);

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

        // Build change password link
        var baseUrl = corsOptions.Value.Origins.Single();

        var changePasswordLink = ChangePasswordLink.Build(
            baseUrl: baseUrl,
            userId: @event.User.Id,
            token: passwordResetToken);

        await queueEmailService.SuperadminWelcomeEmail(
            userId: @event.User.Id,
            userName: userName,
            recipientEmail: email,
            tempPassword: @event.TempPassword,
            changePasswordLink: changePasswordLink,
            traceId: userContext.TraceId,
            correlationId: userContext.CorrelationId,
            cancellationToken: cancellationToken);

        logger.LogInformation("Superadmin welcome email for user {user} queued successfully.",
            @event.User.Id);
    }
}
