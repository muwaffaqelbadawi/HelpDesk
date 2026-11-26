using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Infrastructure.Services.Cors;
using HelpDesk.Shared.Exceptions;
using HelpDesk.Shared.Interfaces;
using HelpDesk.Shared.Links;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace HelpDesk.Infrastructure.SystemAccounts.Superadmin;

public sealed class SuperadminHandlerEmailEventHandler(
    UserManager<ApplicationUser> userManager,
    IOptions<CorsOptions> corsOptions,
    IQueueEmailService queueEmailService,
    IUserContext userContext,
    ILogger<SuperadminHandlerEmailEventHandler> logger)
        : IDomainEventHandler<SuperadminCreatedEvent>
{
    public async Task HandleAsync(
        SuperadminCreatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        // In the production environment for Superadmin Prefer controlled
        // bootstrap/provisioning process SSO

        logger.LogInformation("{handler}: Handling login event for user {UserId}",
            nameof(SuperadminHandlerEmailEventHandler),
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
