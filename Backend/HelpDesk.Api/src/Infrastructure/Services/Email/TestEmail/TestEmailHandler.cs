using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Email.TestEmail;

public sealed class TestEmailHandler(
    IQueueEmailService queueEmailService,
    IUserContext userContext,
    ILogger<TestEmailHandler> logger)
        : ICommandHandler<TestEmailCommand>
{
    public async Task HandleAsync(
        TestEmailCommand command,
        CancellationToken cancellationToken)
    {
        // For testing purposes, we can generate a new userId for each test email sent.
        // In a real-world scenario, you might want to use an existing userId.

        var userId = Guid.NewGuid();
        var traceId = userContext.TraceId;
        var correlationId = userContext.CorrelationId;

        await queueEmailService.TestEmail(
            userId: userId,
            recipientEmail: command.RecipientEmail,
            traceId: traceId,
            correlationId: correlationId,
            cancellationToken: cancellationToken);

        logger.LogInformation("Test email for user {user} queued successfully.",
            userId);
    }
}
