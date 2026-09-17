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
        string tempPassword,
        string changePasswordLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken);

    Task SuperadminWelcomeEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string tempPassword,
        string changePasswordLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken);

    Task LoginEmail(
        Guid userId,
        string userName,
        string recipientEmail,
        string ipAddress,
        string browser,
        string resetLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken);
}
