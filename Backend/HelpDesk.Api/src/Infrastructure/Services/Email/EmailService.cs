using HelpDesk.src.Shared.Interfaces;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;

namespace HelpDesk.src.Infrastructure.Services.Email;

public sealed class EmailService : IEmailService
{
    private readonly SmtpSettings _smtpSettings;
    private readonly IEmailTemplateRenderer _templateRenderer;
    private readonly ILogger<EmailService> _logger;

    public EmailService(
        IOptions<SmtpSettings> smtpOptions,
        IEmailTemplateRenderer templateRenderer,
        ILogger<EmailService> logger)
    {
        _smtpSettings = smtpOptions.Value;
        _templateRenderer = templateRenderer;
        _logger = logger;
    }

    public async Task SendWelcomeEmailAsync(
        Guid userId,
        string userName,
        string fullName,
        string recipientEmail,
        string tempPassword,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken)
    {
        var body = await _templateRenderer.RenderAsync(
            "WelcomeEmail.html",
            new Dictionary<string, string>
            {
                ["userName"] = userName,
                ["fullName"] = fullName,
                ["tempPassword"] = tempPassword
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
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default)
    {
        var body = await _templateRenderer.RenderAsync(
            "SuperadminWelcomeEmail.html",
            new Dictionary<string, string>
            {
                ["userName"] = userName,
                ["tempPassword"] = tempPassword
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

    public async Task SendConfirmationLinkAsync(
        Guid userId,
        string userName,
        string recipientEmail,
        string confirmationLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default)
    {
        var body = await _templateRenderer.RenderAsync(
            "ConfirmationEmail.html",
            new Dictionary<string, string>
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
        var body = await _templateRenderer.RenderAsync(
            "PasswordResetCode.html",
            new Dictionary<string, string>
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
        var body = await _templateRenderer.RenderAsync(
            "PasswordResetLink.html",
            new Dictionary<string, string>
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
        var body = await _templateRenderer.RenderAsync("TestEmail.html");

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

        message.From.Add(new MailboxAddress(_smtpSettings.SenderName, _smtpSettings.SenderEmail));

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
                _smtpSettings.Host,
                _smtpSettings.Port,
                _smtpSettings.UseSsl
                ? SecureSocketOptions.StartTls
                : SecureSocketOptions.None,
                cancellationToken);

            if (!string.IsNullOrWhiteSpace(_smtpSettings.Username) &&
                !string.IsNullOrWhiteSpace(_smtpSettings.Password))
            {
                await smtp.AuthenticateAsync(
                    _smtpSettings.Username,
                    _smtpSettings.Password,
                    cancellationToken);
            }

            await smtp.SendAsync(message);

            _logger.LogInformation(
                "Email sent successfully for user {UserId}. TraceId: {TraceId}, CorrelationId: {CorrelationId}",
                userId,
                traceId,
                correlationId);
        }
        catch (Exception ex)
        {
            _logger.LogError(
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
