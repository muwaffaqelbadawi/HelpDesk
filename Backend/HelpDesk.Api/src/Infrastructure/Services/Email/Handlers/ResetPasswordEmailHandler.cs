using HelpDesk.src.Features.Auth.ResetPassword.User;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Email.Handlers;

public sealed class ResetPasswordEmailHandler(
    //IQueueEmailService queueEmailService,
    ILogger<ResetPasswordEmailHandler> logger)
        : IDomainEventHandler<ResetPasswordEvent>
{
    public Task HandleAsync(
        ResetPasswordEvent @event,
        CancellationToken cancellationToken = default)
    {
        logger.LogInformation("{handler}: Handling login event for user {UserId}",
            nameof(ResetPasswordEmailHandler),
            @event.User.Id);


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

        // Send login email
        //await queueEmailService.PasswordResetSuccessfullyEmail(
        //    userId: @event.User.Id,
        //    userName: userName,
        //    recipientEmail: email,
        //    traceId: userContext.TraceId,
        //    correlationId: userContext.CorrelationId,
        //    cancellationToken: cancellationToken);

        logger.LogInformation("Login email for user {user} queued successfully.",
            @event.User.Id);

        throw new NotImplementedException();
    }
}
