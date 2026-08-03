using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Email;

public sealed class EmailService : IEmailService
{
    private readonly SmtpSettings _smtpSettings;
    private readonly ILogger<EmailService> _logger;

    public EmailService(
        IOptions<SmtpSettings> smtpOptions,
        ILogger<EmailService> logger)
    {
        _smtpSettings = smtpOptions.Value;
        _logger = logger;
    }

    public async Task SendConfirmationLinkAsync(
        Guid userId,
        string? userName,
        string email,
        string confirmationLink,
        CancellationToken cancellationToken = default)
    {
        var subject = "Confirm your email";

        var body = $"""
            <p>Hello {userName ?? "User"},</p>
            <p>Please confirm your account by clicking the link below:</p>
            <p><a href='{confirmationLink}'>Confirm Email</a></p>
            <p>If you didn't request this, you can safely ignore this email.</p>
            """;

        await SendEmailAsync(email, subject, body, cancellationToken);
    }

    public async Task SendPasswordResetCodeAsync(
        Guid userId,
        string? userName,
        string email,
        string resetCode,
        CancellationToken cancellationToken = default)
    {
        var subject = "Your password reset code";

        var body = $"""
            <p>Hello {userName ?? "User"},</p>
            <p>Your password reset code is:</p>
            <h2>{resetCode}</h2>
            <p>Use this code to reset your password. It will expire soon.</p>
            """;

        await SendEmailAsync(email, subject, body, cancellationToken);
    }

    public async Task SendPasswordResetLinkAsync(
        Guid userId,
        string? userName,
        string email,
        string resetLink,
        CancellationToken cancellationToken = default)
    {
        var subject = "Reset your password";

        var body = $"""
            <p>Hello {userName ?? "User"},</p>
            <p>Click the link below to reset your password:</p>
            <p><a href='{resetLink}'>Reset Password</a></p>
            <p>If you didn't request a password reset, you can ignore this email.</p>
            """;

        await SendEmailAsync(email, subject, body, cancellationToken);
    }

    // For testing purposes
    public async Task SendTestEmailAsync(
    string recipientEmail,
    CancellationToken cancellationToken = default)
    {
        const string subject = "Mailpit HelpDesk";

        const string html = """
            <h2>🎉 Mailpit is working!</h2>

            <p>Your HelpDesk email service is configured correctly.</p>

            <hr/>

            <p>If you can read this email, MailKit + Mailpit are working successfully.</p>
        """;

        await SendEmailAsync(recipientEmail, subject, html, cancellationToken);
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
                await smtp.DisconnectAsync(true, cancellationToken);
        }
    }
}
