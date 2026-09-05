using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Email;

public sealed class QueueEmailService(
    IBackgroundTaskQueue taskQueue) : IQueueEmailService
{
    // Test Email
    public async Task TestEmail(
        string recipientEmail,
        CancellationToken cancellationToken)
    {
        await taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.SendTestEmailAsync(
                recipientEmail,
                cancellationToken);
        }, cancellationToken);
    }

    // Reset password email
    public async Task ResetPasswordEmail(
        string userName,
        string recipientEmail,
        string resetLink,
        CancellationToken cancellationToken)
    {
        await taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.SendPasswordResetLinkAsync(
                userName,
                recipientEmail,
                resetLink,
                cancellationToken);
        }, cancellationToken);
    }

    // WelcomeEmail
    public async Task WelcomeEmail(
        string userName,
        string recipientEmail,
        string fullName,
        string tempPassword,
        CancellationToken cancellationToken)
    {
        await taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.SendWelcomeEmailAsync(
                userName,
                fullName,
                recipientEmail,
                tempPassword,
                cancellationToken);
        }, cancellationToken);
    }

    // SuperadminWelcomeEmail
    public async Task SuperadminWelcomeEmail(
        string userName,
        string recipientEmail,
        string tempPassword,
        CancellationToken cancellationToken)
    {
        await taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.SendSuperadminWelcomeEmailAsync(
                userName,
                recipientEmail,
                tempPassword,
                cancellationToken);
        }, cancellationToken);


        throw new NotImplementedException();
    }
}
