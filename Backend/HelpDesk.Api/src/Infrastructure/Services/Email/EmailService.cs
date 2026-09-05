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
        string userName,
        string fullName,
        string recipientEmail,
        string tempPassword,
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
            recipientEmail: recipientEmail,
            subject: EmailSubject.WelcomeEmail,
            htmlBody: body,
            cancellationToken: cancellationToken);
    }

    public async Task SendSuperadminWelcomeEmailAsync(
        string userName,
        string recipientEmail,
        string tempPassword,
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
            recipientEmail: recipientEmail,
            subject: EmailSubject.SuperadminWelcomeEmail,
            htmlBody: body,
            cancellationToken: cancellationToken);
    }

    public async Task SendConfirmationLinkAsync(
        string userName,
        string recipientEmail,
        string confirmationLink,
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
            recipientEmail: recipientEmail,
            subject: EmailSubject.ConfirmationEmail,
            htmlBody: body,
            cancellationToken: cancellationToken);
    }

    public async Task SendPasswordResetCodeAsync(
        string userName,
        string recipientEmail,
        string resetCode,
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
            recipientEmail: recipientEmail,
            subject: EmailSubject.PasswordResetCode,
            htmlBody: body,
            cancellationToken: cancellationToken);
    }

    public async Task SendPasswordResetLinkAsync(
        string userName,
        string recipientEmail,
        string resetLink,
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
            recipientEmail: recipientEmail,
            subject: EmailSubject.PasswordResetLink,
            htmlBody: body,
            cancellationToken: cancellationToken);
    }

    public async Task SendTestEmailAsync(
    string recipientEmail,
    CancellationToken cancellationToken = default)
    {
        var body = await _templateRenderer.RenderAsync("TestEmail.html");

        await SendEmailAsync(
            recipientEmail: recipientEmail,
            subject: EmailSubject.TestEmailService,
            htmlBody: body,
            cancellationToken: cancellationToken);
    }

    private async Task SendEmailAsync(
        string recipientEmail,
        string subject,
        string htmlBody,
        CancellationToken cancellationToken = default)
    {
        // Build the MimeMessage
        var message = new MimeMessage();

        message.From.Add(new MailboxAddress(_smtpSettings.SenderName, _smtpSettings.SenderEmail));

        message.To.Add(MailboxAddress.Parse(recipientEmail));

        message.Subject = subject;

        message.Body = new TextPart(TextFormat.Html)
        {
            Text = htmlBody
        };

        // Send via a new SmtpClient (don't reuse)
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

            // Authenticate if credentials are provided
            if (!string.IsNullOrWhiteSpace(_smtpSettings.Username) &&
                !string.IsNullOrWhiteSpace(_smtpSettings.Password))
            {
                await smtp.AuthenticateAsync(
                    _smtpSettings.Username,
                    _smtpSettings.Password,
                    cancellationToken);
            }

            await smtp.SendAsync(message);

            _logger.LogInformation("Email sent to {Recipient}", recipientEmail);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to send email to {Recipient}", recipientEmail);

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
