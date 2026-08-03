using HelpDesk.src.Features.Roles.Assign;
using HelpDesk.src.Features.Roles.GetAll;
using HelpDesk.src.Features.Roles.RemoveRole;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/roles")]
public sealed class AdminRoleController : ControllerBase
{
    // Admin-initiated


    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public AdminRoleController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }

    // Get all roles
    [HttpGet]
    [Authorize(Policy = "Permission:Roles.View")]
    public async Task<IActionResult> GetRoles(
        [FromServices] IQueryHandler<RolesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<IReadOnlyCollection<RoleData>>(
            message: "Roles retrieved successfully.",
            time: _dateTimeService.UtcNow,
            data: result.Roles));
    }



    // GET /api/admin/roles/{roleId}
    [HttpGet("{roleId}")]
    public Task<IActionResult> GetRole()
    {
        throw new NotImplementedException();
    }




    // Assign Role to a specified user (POST)
    [Authorize(Policy = "Permission:Users.Assign-Role")]
    [HttpPost("users/{userId}/roles")]
    public async Task<IActionResult> AssignRole(
         [FromServices] ICommandHandler<AssignRoleCommand, AssignRoleResponse> handler,
         [FromRoute] string userId,
         [FromBody] AssignRoleBody body,
         CancellationToken cancellationToken)
    {
        var command = new AssignRoleCommand(userId, body.RoleName);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<UserData>(
            message: "Role Assigned successfully.",
            time: _dateTimeService.UtcNow,
            data: result.UserData));
    }




    // (DELETE) Remove Role from a user
    [Authorize(Policy = "Permission:Users.Remove-Role")]
    [HttpDelete("users/{userId}/roles{roleName}")]
    public async Task<IActionResult> RemoveRole(
         [FromServices] ICommandHandler<RemoveRoleCommand, RemoveRoleResponse> handler,
         [FromRoute] string userId,
         [FromRoute] string roleName,
         CancellationToken cancellationToken)
    {
        var command = new RemoveRoleCommand(userId, roleName);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<UserData>(
            message: "Role removed successfully.",
            time: _dateTimeService.UtcNow,
            data: result.UserData));
    }
}
