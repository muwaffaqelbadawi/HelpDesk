using HelpDesk.src.Features.Email;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/test-email")]
[Authorize]
public sealed class AdminTestEmailController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public AdminTestEmailController(
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
