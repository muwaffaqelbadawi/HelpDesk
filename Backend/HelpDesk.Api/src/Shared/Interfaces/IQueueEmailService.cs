namespace HelpDesk.src.Shared.Interfaces;

public interface IQueueEmailService
{
    Task TestEmail(
        Guid userId,
        string recipientEmail,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken);

    Task ResetPasswordEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string resetLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken);

    Task WelcomeEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string fullName,
        string tempPassword,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken);

    Task SuperadminWelcomeEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string tempPassword,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken);
}
