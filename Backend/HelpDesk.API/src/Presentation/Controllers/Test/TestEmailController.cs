using HelpDesk.src.Infrastructure.Services.Email.TestEmail;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Test;

[ApiController]
[Route("api/test-email")]
public sealed class TestEmailController : ControllerBase
{
    // Test email controller

    [HttpPost]
    public async Task<ActionResult<ApiResponse<TestEmailData>>> SendEmail(
        [FromServices] ICommandHandler<TestEmailCommand, TestEmailResponse> handler,
        [FromServices] IDateTimeService dateTimeService,
        TestEmailBody body,
        CancellationToken cancellationToken)
    {
        var command = new TestEmailCommand(body.RecipientEmail);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<TestEmailData>(
            message: ApiMessages.TestEmail,
            time: dateTimeService.UtcNow,
            data: new TestEmailData
            {
                RecipientEmail = body.RecipientEmail,
                SenderEmail = result.SenderEmail
            }));
    }
}
