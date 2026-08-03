using HelpDesk.src.Features.Users.GetCurrent;
using HelpDesk.src.Features.Users.UpdateUserProfile;
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

    // Get Current User
    [HttpGet("me")]
    public async Task<IActionResult> GetCurrentUser(
        [FromServices] IQueryHandler<CurrentUserResponse> handler,
        [FromServices] IDateTimeService dateTimeService,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<CurrentUserResponse>(
            message: "User fetched successfully.",
            time: dateTimeService.UtcNow,
            data: result));
    }

    // Update User Profile
    [HttpPut("me")]
    public async Task<IActionResult> UpdateUserProfile(
        [FromServices] ICommandHandler<UpdateUseProfilerCommand, UpdateUserProfileResponse> handler,
        [FromBody] UpdateUserProfileBody body,
        CancellationToken cancellationToken)
    {
        var command = new UpdateUseProfilerCommand(
            body.FullEnName,
            body.FullArName,
            body.UserName,
            body.Email,
            body.ExpectedRowVersion);

        await handler.HandleAsync(command, cancellationToken);

        // Return 204 No Content
        return NoContent();
    }
}
