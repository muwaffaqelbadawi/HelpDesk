using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed class PasswordResetEmailEventHandler(
    IQueueEmailService queueEmailService,
    IUserContext userContext,
    ILogger<PasswordResetEmailEventHandler> logger)
        : IDomainEventHandler<PasswordResetEvent>
{
    public async Task HandleAsync(
        PasswordResetEvent @event,
        CancellationToken cancellationToken = default)
    {
        logger.LogInformation("{handler}: Handling login event for user {UserId}",
            nameof(PasswordResetEmailEventHandler),
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

        await queueEmailService.PasswordResetSuccessfullyEmail(
            userId: @event.User.Id,
            userName: userName,
            @event.OccurredAt.ToString("dd MMM yyyy, hh:mm tt zzz"),
            recipientEmail: email,
            traceId: userContext.TraceId,
            correlationId: userContext.CorrelationId,
            cancellationToken: cancellationToken);

        logger.LogInformation("Login email for user {user} queued successfully.",
            @event.User.Id);
    }
}
