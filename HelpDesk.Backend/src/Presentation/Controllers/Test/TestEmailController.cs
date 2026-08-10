using HelpDesk.src.Infrastructure.Services.Email.EmailTest;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Test;

[ApiController]
[Route("api/test-email")]
[Authorize]
public sealed class TestEmailController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public TestEmailController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }

    // HelpDesk Email
    [HttpPost("test-email")]
    public async Task<IActionResult> SendEmail(
        [FromServices] ICommandHandler<SendTestEmailCommand, SendTestEmailResponse> handler,
        SendTestEmailBody body,
        CancellationToken cancellationToken)
    {
        var command = new SendTestEmailCommand(body.RecipientEmail);

        await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<string>(
            message: "HelpDesk Email send successfully.",
            time: _dateTimeService.UtcNow,
            data: string.Empty));
    }
}
