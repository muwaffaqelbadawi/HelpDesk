using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Email;

public sealed class QueueEmailService(IBackgroundTaskQueue taskQueue)
    : IQueueEmailService
{
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

    public async Task WelcomeEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string tempPassword,
        string resetPasswordLink,
        string linkExpiration,
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
                linkExpiration: linkExpiration,
                traceId: traceId,
                correlationId: correlationId,
                cancellationToken: cancellationToken);
        }, cancellationToken);
    }

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

    public async Task PasswordResetSuccessfullyEmail(
        Guid userId,
        string userName,
        string resetTime,
        string recipientEmail,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken)
    {
        await taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.PasswordResetSuccessfullyEmailAsync(
                userId: userId,
                userName: userName,
                resetTime: resetTime,
                recipientEmail: recipientEmail,
                traceId: traceId,
                correlationId: correlationId,
                cancellationToken: cancellationToken);
        }, cancellationToken);
    }

    public async Task PasswordChangedEmail(
        Guid userId,
        string userName,
        string changedPasswordTime,
        string recipientEmail,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken)
    {
        await taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.PasswordChangedEmailAsync(
                userId: userId,
                userName: userName,
                changedPasswordTime: changedPasswordTime,
                recipientEmail: recipientEmail,
                traceId: traceId,
                correlationId: correlationId,
                cancellationToken: cancellationToken);
        }, cancellationToken);
    }
}
