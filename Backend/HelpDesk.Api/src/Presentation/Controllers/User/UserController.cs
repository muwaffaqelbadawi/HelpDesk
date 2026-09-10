using HelpDesk.src.Features.Users.UserAccount.GetCurrent;
using HelpDesk.src.Features.Users.UserAccount.UpdateCurrent;
using HelpDesk.src.Features.Users.UserModules.GetCurrent;
using HelpDesk.src.Features.Users.UserPermissions.GetCurrent;
using HelpDesk.src.Features.Users.UserRoles.GetCurrent;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.User;

[ApiController]
[Route("api/users")]
[Authorize]
public sealed class UserController(IDateTimeService dateTimeService)
    : ControllerBase
{
    // Self-Service

    // GetCurrent
    [HttpGet("me")]
    public async Task<IActionResult> GetCurrentUserAccount(
        [FromServices] IQueryHandler<CurrentUserAccountResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<CurrentUserAccountResponse>(
            message: ApiMessages.UserRetrieved,
            time: dateTimeService,
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

    // Roles

    // GetCurrent
    [HttpGet("me/roles")]
    public async Task<IActionResult> GetCurrentRoles(
        [FromServices] IQueryHandler<CurrentRolesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<CurrentRolesResponse>(
            message: ApiMessages.RolesRetrieved,
            time: dateTimeService,
            data: result));
    }

    // Permissions

    // GetAll
    [HttpGet("me/permissions")]
    public async Task<IActionResult> GetCurrentPermissions(
        [FromServices] IQueryHandler<CurrentPermissionsResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<CurrentPermissionsResponse>(
            message: ApiMessages.PermissionsRetrieved,
            time: dateTimeService,
            data: result));
    }

    // Modules

    // GetAll
    [HttpGet("me/modules")]
    public async Task<IActionResult> GetCurrentModules(
        [FromServices] IQueryHandler<CurrentModulesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<CurrentModulesResponse>(
            message: ApiMessages.ModulesRetrieved,
            time: dateTimeService,
            data: result));
    }
}
