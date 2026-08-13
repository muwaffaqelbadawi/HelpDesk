using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Email.EmailTest;

public sealed class SendTestEmailHandler
    : ICommandHandler<SendTestEmailCommand, SendTestEmailResponse>
{
    private readonly IEmailService _emailService;
    private readonly ILogger<SendTestEmailHandler> _logger;

    public SendTestEmailHandler(
        IEmailService emailService,
        ILogger<SendTestEmailHandler> logger)
    {
        _emailService = emailService;
        _logger = logger;
    }

    public async Task<SendTestEmailResponse> HandleAsync(
        SendTestEmailCommand command,
        CancellationToken cancellationToken)
    {
        await _emailService.SendTestEmailAsync(
            command.RecipientEmail,
            cancellationToken);

        return new SendTestEmailResponse();
    }


}
