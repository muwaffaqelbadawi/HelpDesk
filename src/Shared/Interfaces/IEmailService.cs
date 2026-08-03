namespace HelpDesk.src.Shared.Interfaces;

public interface IEmailService
{
    // Customize system interface

    Task SendConfirmationLinkAsync(
        Guid userId,
        string? userName,
        string email,
        string confirmationLink,
        CancellationToken cancellationToken = default);

    Task SendPasswordResetLinkAsync(
        Guid userId,
        string? userName,
        string email,
        string resetLink,
        CancellationToken cancellationToken = default);

    Task SendPasswordResetCodeAsync(
        Guid userId,
        string? userName,
        string email,
        string resetCode,
        CancellationToken cancellationToken);

    Task SendTestEmailAsync(
        string recipientEmail,
        CancellationToken cancellationToken = default);
}
