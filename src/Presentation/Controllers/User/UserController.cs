using HelpDesk.src.Features.Users.UserAccount.GetCurrent;
using HelpDesk.src.Features.Users.UserAccount.UpdateCurrent;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.User;

[ApiController]
[Route("api/users")]
[Authorize]
public sealed class UserController : ControllerBase
{
    // Self-service

    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public UserController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }

    // GetCurrent
    [HttpGet("me")]
    public async Task<IActionResult> GetCurrentUserAccount(
        [FromServices] IQueryHandler<CurrentUserAccountResponse> handler,
        [FromServices] IDateTimeService dateTimeService,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<CurrentUserAccountResponse>(
            message: "User fetched successfully.",
            time: dateTimeService.UtcNow,
            data: result));
    }

    // Update
    [HttpPut("me")]
    public async Task<IActionResult> UpdateCurrentUserAccount(
        [FromServices] ICommandHandler<UpdateCurrentUserAccountCommand, UpdateCurrentUserAccountResponse> handler,
        [FromBody] UpdateCurrentUserAccountBody body,
        CancellationToken cancellationToken)
    {
        var command = new UpdateCurrentUserAccountCommand(
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
