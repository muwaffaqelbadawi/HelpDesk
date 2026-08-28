namespace HelpDesk.src.Shared.Interfaces;

public interface IQueueEmailService
{
    Task TestEmail(
        string recipientEmail,
        CancellationToken cancellationToken);
    // Reset password email
    Task ResetPasswordEmail(
        string userName,
        string recipientEmail,
        string resetLink,
        CancellationToken cancellationToken);

    // Welcome email
    Task WelcomeEmail(
        string userName,
        string recipientEmail,
        string fullName,
        string tempPassword,
    CancellationToken cancellationToken);
}
