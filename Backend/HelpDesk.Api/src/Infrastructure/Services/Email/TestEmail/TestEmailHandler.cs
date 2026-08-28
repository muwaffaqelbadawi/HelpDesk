using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.Email.TestEmail;

public sealed class TestEmailHandler :
    ICommandHandler<TestEmailCommand, TestEmailResponse>
{
    private readonly SmtpSettings _emailOptions;
    private readonly IQueueEmailService _queueEmailService;
    private readonly ILogger<TestEmailHandler> _logger;

    public TestEmailHandler(
        IOptions<SmtpSettings> emailOptions,
        IQueueEmailService queueEmailService,
        ILogger<TestEmailHandler> logger)
    {
        _emailOptions = emailOptions.Value;
        _queueEmailService = queueEmailService;
        _logger = logger;
    }

    public async Task<TestEmailResponse> HandleAsync(
        TestEmailCommand command,
        CancellationToken cancellationToken)
    {
        await _queueEmailService.TestEmail(
            recipientEmail: command.RecipientEmail,
            cancellationToken: cancellationToken);

        _logger.LogInformation(
            "Test email sent to {RecipientEmail}", command.RecipientEmail);

        return new TestEmailResponse(
            SenderEmail: _emailOptions.SenderEmail);
    }
}
