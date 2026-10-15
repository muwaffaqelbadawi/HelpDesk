using HelpDesk.src.Features.Users.GetMy;
using HelpDesk.src.Features.Users.UpdateMy;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.User;

[ApiController]
[Route("api/users")]
[Authorize]
public sealed class UserController(IDateTimeService dateTimeService) : ControllerBase
{
    // Get
    [HttpGet("me")]
    public async Task<IActionResult> GetMytUserAccount(
        [FromServices] IQueryHandler<GetMyUserAccountResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<GetMyUserAccountResponse>(
            message: ApiMessages.UserRetrieved,
            time: dateTimeService,
            data: result));
    }

    // Update
    [HttpPut("me")]
    public async Task<IActionResult> UpdateMyUserAccount(
        [FromServices] ICommandHandler<UpdateMyUserAccountCommand, UpdateMyUserAccountResponse> handler,
        [FromBody] UpdateMyUserAccountBody body,
        CancellationToken cancellationToken)
    {
        var command = new UpdateMyUserAccountCommand(
            body.FullEnName,
            body.FullArName,
            body.UserName,
            body.Email,
            body.UserRowVersion,
            body.EmployeeRowVersion);

        await handler.HandleAsync(command, cancellationToken);

        // Return 204 No Content
        return NoContent();
    }
}
