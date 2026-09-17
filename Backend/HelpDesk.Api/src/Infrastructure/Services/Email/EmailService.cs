using HelpDesk.src.Shared.Interfaces;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;

namespace HelpDesk.src.Infrastructure.Services.Email;

public sealed class EmailService(
    IOptions<SmtpSettings> smtpSettings,
    IEmailTemplateRenderer templateRenderer,
    ILogger<EmailService> logger) : IEmailService
{
    public async Task SendWelcomeEmailAsync(
        Guid userId,
        string userName,
        string recipientEmail,
        string tempPassword,
        string changePasswordLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken)
    {
        var body = await templateRenderer.RenderAsync(
            templateName: TemplateName.WelcomeEmail,
            placeholders: new Dictionary<string, string>
            {
                ["userName"] = userName,
                ["tempPassword"] = tempPassword,
                ["changePasswordLink"] = changePasswordLink
            });

        await SendEmailAsync(
            userId: userId,
            recipientEmail: recipientEmail,
            subject: EmailSubject.WelcomeEmail,
            htmlBody: body,
            traceId: traceId,
            correlationId: correlationId,
            cancellationToken: cancellationToken);
    }

    public async Task SendSuperadminWelcomeEmailAsync(
        Guid userId,
        string userName,
        string recipientEmail,
        string tempPassword,
        string changePasswordLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default)
    {
        var body = await templateRenderer.RenderAsync(
            templateName: TemplateName.SuperadminWelcomeEmail,
            placeholders: new Dictionary<string, string>
            {
                ["userName"] = userName,
                ["tempPassword"] = tempPassword,
                ["changePasswordLink"] = changePasswordLink
            });

        await SendEmailAsync(
            userId: userId,
            recipientEmail: recipientEmail,
            subject: EmailSubject.SuperadminWelcomeEmail,
            htmlBody: body,
            traceId: traceId,
            correlationId: correlationId,
            cancellationToken: cancellationToken);
    }

    public async Task SendLoginEmailAsync(
        Guid userId,
        string userName,
        string recipientEmail,
        string ipAddress,
        string browser,
        string resetLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default)
    {
        var body = await templateRenderer.RenderAsync(
            templateName: TemplateName.LoginEmail,
            placeholders: new Dictionary<string, string>
            {
                ["userName"] = userName,
                ["ipAddress"] = ipAddress,
                ["browser"] = browser,
                ["resetLink"] = resetLink
            });

        await SendEmailAsync(
            userId: userId,
            recipientEmail: recipientEmail,
            subject: EmailSubject.LoginEmail,
            htmlBody: body,
            traceId: traceId,
            correlationId: correlationId,
            cancellationToken: cancellationToken);
    }

    public async Task SendConfirmationLinkAsync(
        Guid userId,
        string userName,
        string recipientEmail,
        string confirmationLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default)
    {
        var body = await templateRenderer.RenderAsync(
            templateName: TemplateName.ConfirmationEmail,
            placeholders: new Dictionary<string, string>
            {
                ["userName"] = userName,
                ["confirmationLink"] = confirmationLink
            });

        await SendEmailAsync(
            userId: userId,
            recipientEmail: recipientEmail,
            subject: EmailSubject.ConfirmationEmail,
            htmlBody: body,
            traceId: traceId,
            correlationId: correlationId,
            cancellationToken: cancellationToken);
    }

    public async Task SendPasswordResetCodeAsync(
        Guid userId,
        string userName,
        string recipientEmail,
        string resetCode,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default)
    {
        var body = await templateRenderer.RenderAsync(
            templateName: TemplateName.PasswordResetCode,
            placeholders: new Dictionary<string, string>
            {
                ["userName"] = userName,
                ["resetCode"] = resetCode
            });

        await SendEmailAsync(
            userId: userId,
            recipientEmail: recipientEmail,
            subject: EmailSubject.PasswordResetCode,
            htmlBody: body,
            traceId: traceId,
            correlationId: correlationId,
            cancellationToken: cancellationToken);
    }

    public async Task SendPasswordResetLinkAsync(
        Guid userId,
        string userName,
        string recipientEmail,
        string resetLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default)
    {
        var body = await templateRenderer.RenderAsync(
            templateName: TemplateName.PasswordResetLink,
            placeholders: new Dictionary<string, string>
            {
                ["userName"] = userName,
                ["resetLink"] = resetLink
            });

        await SendEmailAsync(
            userId: userId,
            recipientEmail: recipientEmail,
            subject: EmailSubject.PasswordResetLink,
            htmlBody: body,
            traceId: traceId,
            correlationId: correlationId,
            cancellationToken: cancellationToken);
    }

    public async Task SendTestEmailAsync(
        Guid userId,
        string recipientEmail,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default)
    {
        var body = await templateRenderer.RenderAsync(
            templateName: TemplateName.TestEmail,
            placeholders: []);

        await SendEmailAsync(
            userId: userId,
            recipientEmail: recipientEmail,
            subject: EmailSubject.TestEmailService,
            htmlBody: body,
            traceId: traceId,
            correlationId: correlationId,
            cancellationToken: cancellationToken);
    }

    private async Task SendEmailAsync(
        Guid userId,
        string recipientEmail,
        string subject,
        string htmlBody,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default)
    {
        var message = new MimeMessage();

        message.From.Add(new MailboxAddress(
            smtpSettings.Value.SenderName,
            smtpSettings.Value.SenderEmail));

        message.To.Add(MailboxAddress.Parse(recipientEmail));

        message.Subject = subject;

        message.Body = new TextPart(TextFormat.Html)
        {
            Text = htmlBody
        };

        using var smtp = new SmtpClient();

        try
        {
            await smtp.ConnectAsync(
                smtpSettings.Value.Host,
                smtpSettings.Value.Port,
                smtpSettings.Value.UseSsl
                    ? SecureSocketOptions.StartTls
                    : SecureSocketOptions.None,
                cancellationToken);

            if (!string.IsNullOrWhiteSpace(smtpSettings.Value.Username) &&
                !string.IsNullOrWhiteSpace(smtpSettings.Value.Password))
            {
                await smtp.AuthenticateAsync(
                    smtpSettings.Value.Username,
                    smtpSettings.Value.Password,
                    cancellationToken);
            }

            await smtp.SendAsync(message);

            logger.LogInformation(
                "Email sent successfully for user {UserId}. TraceId: {TraceId}, CorrelationId: {CorrelationId}",
                userId,
                traceId,
                correlationId);
        }
        catch (Exception ex)
        {
            logger.LogError(
                ex,
                "Failed to send email for user {UserId}. TraceId: {TraceId}, CorrelationId: {CorrelationId}.",
                userId,
                traceId,
                correlationId);

            throw;
        }
        finally
        {
            if (smtp.IsConnected)
            {
                await smtp.DisconnectAsync(true, cancellationToken);
            }
        }
    }
}
