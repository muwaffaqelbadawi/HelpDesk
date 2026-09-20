using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Email;

public sealed class QueueEmailService(IBackgroundTaskQueue taskQueue)
    : IQueueEmailService
{
    // Test email
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

    // Welcome email
    public async Task WelcomeEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string tempPassword,
        string resetPasswordLink,
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
                recipientEmail: recipientEmail,
                tempPassword: tempPassword,
                resetPasswordLink: resetPasswordLink,
                traceId: traceId,
                correlationId: correlationId,
                cancellationToken: cancellationToken);
        }, cancellationToken);
    }

    // Superadmin welcome email
    public async Task SuperadminWelcomeEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string tempPassword,
        string changePasswordLink,
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
                changePasswordLink: changePasswordLink,
                traceId: traceId,
                correlationId: correlationId,
                cancellationToken: cancellationToken);
        }, cancellationToken);
    }

    // Login email
    public async Task LoginEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string ipAddress,
        string browser,
        string changePasswordLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken)
    {
        await taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.SendLoginEmailAsync(
                userId: userId,
                userName: userName,
                recipientEmail: recipientEmail,
                ipAddress: ipAddress,
                browser: browser,
                changePasswordLink: changePasswordLink,
                traceId: traceId,
                correlationId: correlationId,
                cancellationToken: cancellationToken);
        }, cancellationToken);
    }
}
