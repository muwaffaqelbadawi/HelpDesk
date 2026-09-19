using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Infrastructure.Services.Email.TestEmail;

[ApiController]
[Route("api/test-email")]
public sealed class TestEmailController : ControllerBase
{
    // Test email controller

    [HttpPost]
    public async Task<ActionResult> SendEmail(
        [FromServices] ICommandHandler<TestEmailCommand> handler,
        [FromServices] IDateTimeService dateTimeService,
        [FromBody] TestEmailBody body,
        CancellationToken cancellationToken)
    {
        var command = new TestEmailCommand(body.RecipientEmail);

        await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse(
            message: ApiMessages.TestEmail,
            time: dateTimeService));
    }
}
