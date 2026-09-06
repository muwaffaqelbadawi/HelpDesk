namespace HelpDesk.src.Shared.Interfaces;

public interface IEmailService
{
    Task SendWelcomeEmailAsync(
        Guid userId,
        string userName,
        string fullName,
        string recipientEmail,
        string tempPassword,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default);

    Task SendSuperadminWelcomeEmailAsync(
        Guid userId,
        string userName,
        string recipientEmail,
        string tempPassword,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default);

    Task SendConfirmationLinkAsync(
        Guid userId,
        string userName,
        string recipientEmail,
        string confirmationLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default);

    Task SendPasswordResetLinkAsync(
        Guid userId,
        string userName,
        string recipientEmail,
        string resetLink,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default);

    Task SendPasswordResetCodeAsync(
        Guid userId,
        string userName,
        string recipientEmail,
        string resetCode,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default);

    Task SendTestEmailAsync(
        Guid userId,
        string recipientEmail,
        string traceId,
        string correlationId,
        CancellationToken cancellationToken = default);
}
