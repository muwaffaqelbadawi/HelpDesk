using HelpDesk.src.Features.Users.UserAccount.Admin.Create;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Cors;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Links;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.Email.Handlers;

public sealed class CreateUserAccountEmailHandler(
    UserManager<ApplicationUser> userManager,
    IOptions<CorsOptions> corsOptions,
    IQueueEmailService queueEmailService,
    IUserContext userContext,
    ILogger<CreateUserAccountEmailHandler> logger)
        : IDomainEventHandler<UserAccountCreatedEvent>
{
    public async Task HandleAsync(
        UserAccountCreatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        logger.LogInformation("{handler}: Handling login event for user {UserId}",
            nameof(CreateUserAccountEmailHandler),
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

        // Build reset password link
        var baseUrl = corsOptions.Value.Origins.Single();

        var resetPasswordLink = ResetPasswordLink.Build(
            baseUrl: baseUrl,
            userId: @event.User.Id,
            token: passwordResetToken);

        await queueEmailService.WelcomeEmail(
            userId: @event.User.Id,
            userName: userName,
            recipientEmail: email,
            tempPassword: @event.TempPassword,
            resetPasswordLink: resetPasswordLink,
            traceId: userContext.TraceId,
            correlationId: userContext.CorrelationId,
            cancellationToken: cancellationToken);

        logger.LogInformation("Welcome email for user {user} queued successfully.",
            @event.User.Id);
    }
}
