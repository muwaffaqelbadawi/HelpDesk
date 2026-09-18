using HelpDesk.src.Features.Auth.Login;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Cors;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Links;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.Email.Handlers;

public sealed class LoginEmailHandler(
    UserManager<ApplicationUser> userManager,
    IOptions<CorsOptions> corsOptions,
    IQueueEmailService queueEmailService,
    IUserContext userContext,
    ILogger<LoginEmailHandler> logger)
        : IDomainEventHandler<LoginEvent>
{
    public async Task HandleAsync(
        LoginEvent @event,
        CancellationToken cancellationToken = default)
    {
        logger.LogInformation("{handler}: Handling login event for user {UserId}",
            nameof(LoginEmailHandler),
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
        var ipAddress = userContext.IpAddress;
        var browser = userContext.Browser;

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

        if (string.IsNullOrWhiteSpace(browser))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["InvalidBrowser"] = ["browser is invalid."]
                });
        }

        if (string.IsNullOrWhiteSpace(ipAddress))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["InvalidIpAddress"] = ["IP address is invalid."]
                });
        }

        // Send login email
        await queueEmailService.LoginEmail(
            userId: @event.User.Id,
            userName: userName,
            recipientEmail: email,
            ipAddress: ipAddress,
            browser: browser,
            resetLink: resetLink,
            traceId: userContext.TraceId,
            correlationId: userContext.CorrelationId,
            cancellationToken: cancellationToken);

        logger.LogInformation("Login email for user {user} queued successfully.",
            @event.User.Id);
    }
}
