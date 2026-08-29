using HelpDesk.src.Features.Modules.GetCurrent;
using HelpDesk.src.Features.Permissions.GetCurrent;
using HelpDesk.src.Features.Roles.GetCurrent;
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
    // Self-Service

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

    // UpdateCurrent
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

    // ----------------------------------------------------------------------------------

    // Roles

    // GetCurrent
    [HttpGet("me/roles")]
    public async Task<IActionResult> GetCurrentRoles(
        [FromServices] IQueryHandler<CurrentRolesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<CurrentRolesResponse>(
            message: "Roles retrieved successfully.",
            time: _dateTimeService.UtcNow,
            data: result));
    }

    // ----------------------------------------------------------------------------------

    // Permissions

    // GetAll
    [HttpGet("me/permissions")]
    public async Task<IActionResult> GetCurrentPermissions(
        [FromServices] IQueryHandler<CurrentPermissionsResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<CurrentPermissionsResponse>(
            message: "Permissions retrieved successfully.",
            time: _dateTimeService.UtcNow,
            data: result));
    }

    // ----------------------------------------------------------------------------------

    // Modules

    // GetAll
    [HttpGet("me/modules")]
    public async Task<IActionResult> GetCurrentModules(
        [FromServices] IQueryHandler<CurrentModulesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<CurrentModulesResponse>(
            message: "Modules retrieved successfully.",
            time: _dateTimeService.UtcNow,
            data: result));
    }
}
