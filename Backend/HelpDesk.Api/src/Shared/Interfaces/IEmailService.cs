namespace HelpDesk.src.Shared.Interfaces;

public interface IEmailService
{
    Task SendWelcomeEmailAsync(
        string userName,
        string fullEnName,
        string recipientEmail,
        string tempPassword,
        CancellationToken cancellationToken = default);

    Task SendConfirmationLinkAsync(
        string userName,
        string recipientEmail,
        string confirmationLink,
        CancellationToken cancellationToken = default);

    Task SendPasswordResetLinkAsync(
        string userName,
        string recipientEmail,
        string resetLink,
        CancellationToken cancellationToken = default);

    Task SendPasswordResetCodeAsync(
        string userName,
        string recipientEmail,
        string resetCode,
        CancellationToken cancellationToken);

    Task SendTestEmailAsync(
        string recipientEmail,
        CancellationToken cancellationToken = default);
}
