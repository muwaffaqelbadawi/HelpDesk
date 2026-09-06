using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Email;

public sealed class QueueEmailService(IBackgroundTaskQueue taskQueue) : IQueueEmailService
{
    // Test Email
    public async Task TestEmail(
        Guid userId,
        string recipientEmail,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken)
    {
        await taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.SendTestEmailAsync(
                userId: userId,
                recipientEmail: recipientEmail,
                traceId: traceId,
                correlationId: correlationId,
                cancellationToken: cancellationToken);
        }, cancellationToken);
    }

    // Reset password email
    public async Task ResetPasswordEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string resetLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken)
    {
        await taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.SendPasswordResetLinkAsync(
                userId: userId,
                userName: userName,
                recipientEmail: recipientEmail,
                resetLink: resetLink,
                traceId: traceId,
                correlationId: correlationId,
                cancellationToken: cancellationToken);
        }, cancellationToken);
    }

    // WelcomeEmail
    public async Task WelcomeEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string fullName,
        string tempPassword,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken)
    {
        await taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.SendWelcomeEmailAsync(
                userId: userId,
                userName: userName,
                fullName: fullName,
                recipientEmail: recipientEmail,
                tempPassword: tempPassword,
                traceId: traceId,
                correlationId: correlationId,
                cancellationToken: cancellationToken);
        }, cancellationToken);
    }

    // SuperadminWelcomeEmail
    public async Task SuperadminWelcomeEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string tempPassword,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken)
    {
        await taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.SendSuperadminWelcomeEmailAsync(
                userId: userId,
                userName: userName,
                recipientEmail: recipientEmail,
                tempPassword: tempPassword,
                traceId: traceId,
                correlationId: correlationId,
                cancellationToken: cancellationToken);
        }, cancellationToken);
    }
}