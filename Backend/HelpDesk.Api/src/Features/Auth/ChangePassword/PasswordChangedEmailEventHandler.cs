using System.Globalization;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ChangePassword;

public sealed class PasswordChangedEmailEventHandler(
    IQueueEmailService queueEmailService,
    IUserContext userContext,
    ILogger<PasswordChangedEmailEventHandler> logger)
        : IDomainEventHandler<PasswordChangedEvent>
{
    public async Task HandleAsync(
        PasswordChangedEvent @event,
        CancellationToken cancellationToken = default)
    {
        var user = @event.User;
        var userId = @event.User.Id;

        logger.LogInformation("{handler}: Handling password changed event for user {UserId}",
            nameof(PasswordChangedEmailEventHandler),
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

        var userTimeZone = @event.User.TimeZone;

        var time = @event.OccurredAt.ToString(
            "dd MMM yyyy, hh:mm tt zzz",
            CultureInfo.InvariantCulture);

        if (userTimeZone is not null)
        {
            try
            {
                var timeZone = TimeZoneInfo.FindSystemTimeZoneById(
                    userTimeZone.Name);

                var localChangeTime = TimeZoneInfo.ConvertTime(
                    @event.OccurredAt,
                    timeZone);

                time = localChangeTime.ToString(
                    "dd MMM yyyy, hh:mm tt zzz",
                    CultureInfo.InvariantCulture);
            }
            catch (TimeZoneNotFoundException exception)
            {
                logger.LogWarning(
                    exception,
                    "Time zone {TimeZone} was not found for user {UserId}. Using the original event timestamp.",
                    userTimeZone.Name,
                    userId);
            }
            catch (InvalidTimeZoneException exception)
            {
                logger.LogWarning(
                    exception,
                    "Time zone {TimeZone} is invalid for user {UserId}. Using the original event timestamp.",
                    userTimeZone.Name,
                    userId);
            }
        }

        await queueEmailService.PasswordChangedEmail(
            userId: userId,
            userName: userName,
            changedPasswordTime: time,
            recipientEmail: email,
            traceId: userContext.TraceId,
            correlationId: userContext.CorrelationId,
            cancellationToken: cancellationToken);

        logger.LogInformation(
            "Password changed email for user: {userId} was queued successfully.",
            userId);
    }
}
