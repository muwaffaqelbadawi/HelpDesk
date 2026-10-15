using HelpDesk.src.Features.Auth.Modules.GetAll;
using HelpDesk.src.Features.Auth.Permissions.GetAll;
using HelpDesk.src.Features.Auth.ResetPassword.Admin;
using HelpDesk.src.Features.Auth.Roles.Assign;
using HelpDesk.src.Features.Auth.Roles.Delete;
using HelpDesk.src.Features.Auth.Roles.GetAll;
using HelpDesk.src.Features.Auth.Roles.Update;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/auth")]
[Authorize]
public sealed class AdminAuthController(IDateTimeService dateTimeService) : ControllerBase
{
    // ResetPassword
    [Authorize(Policy = "Permission:Users.Reset-Password")]
    [HttpPost("users/{userId:guid}/reset-password")]
    public async Task<IActionResult> AdminResetPassword(
        [FromServices] ICommandHandler<AdminResetPasswordCommand, AdminResetPasswordResponse> handler,
        [FromRoute] Guid userId,
        [FromBody] AdminResetPasswordBody body,
        CancellationToken cancellationToken)
    {
        var command = new AdminResetPasswordCommand(userId, body.NewPassword);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<UserAccountData>(
            message: ApiMessages.PasswordReset,
            time: dateTimeService,
            data: result.UserAccountData));
    }

    // Roles
    // AssignRole
    [Authorize(Policy = "Permission:Roles.Assign")]
    [HttpPost("users/{userId:guid}/roles")]
    public async Task<IActionResult> AssignRole(
        [FromServices] ICommandHandler<AssignRoleCommand, AssignRoleResponse> handler,
        [FromRoute] Guid userId,
        [FromBody] AssignRoleBody body,
        CancellationToken cancellationToken)
    {
        var command = new AssignRoleCommand(
            UserId: userId,
            RoleId: body.RoleId);

        var result = await handler.HandleAsync(
            command,
            cancellationToken);

        return Ok(new ApiResponse<AssignRoleResponse>(
            message: ApiMessages.RoleAssigned,
            time: dateTimeService,
            data: result));
    }

    // Roles
    // GetAll
    [Authorize(Policy = "Permission:Roles.View")]
    [HttpGet("users/{userId:guid}/roles")]
    public async Task<IActionResult> GetAllUserRoles(
        [FromServices] IQueryHandler<GetAllUserRolesQuery, GetAllUserRolesResponse> handler,
        [FromRoute] Guid userId,
        CancellationToken cancellationToken)
    {
        var query = new GetAllUserRolesQuery(userId);

        var result = await handler.HandleAsync(
            query,
            cancellationToken);

        return Ok(new ApiResponse<GetAllUserRolesResponse>(
            message: ApiMessages.RolesRetrieved,
            time: dateTimeService,
            data: result));
    }

    // Roles
    // Update
    [Authorize(Policy = "Permission:Roles.Update")]
    [HttpPut("users/{userId:guid}/roles")]
    public async Task<IActionResult> UpdateRole(
         [FromServices] ICommandHandler<UpdateRoleCommand, UpdateRoleResponse> handler,
         [FromRoute] Guid userId,
         [FromBody] UpdateRoleBody body,
         CancellationToken cancellationToken)
    {
        var command = new UpdateRoleCommand(
            UserId: userId,
            RoleId: body.RoleId);

        var result = await handler.HandleAsync(
            command,
            cancellationToken);

        return Ok(new ApiResponse<UpdateRoleResponse>(
            message: ApiMessages.RoleUpdated,
            time: dateTimeService,
            data: result));
    }

    // Roles
    // Delete
    [Authorize(Policy = "Permission:Roles.Delete")]
    [HttpDelete("{userId:guid}/roles")]
    public async Task<IActionResult> DeleteRole(
        [FromServices] ICommandHandler<DeleteRoleCommand> handler,
        [FromRoute] Guid userId,
        [FromBody] DeleteRoleBody body,
        CancellationToken cancellationToken)
    {
        var command = new DeleteRoleCommand(
            UserId: userId,
            RoleId: body.RoleId);

        await handler.HandleAsync(
            command,
            cancellationToken);

        return NoContent();
    }

    // Modules
    // GetAll
    [Authorize(Policy = "Permission:Modules.View")]
    [HttpGet("users/{userId:guid}/modules")]
    public async Task<IActionResult> GetAllUserModules(
        [FromServices] IQueryHandler<GetAllUserModulesQuery, GetAllUserModulesResponse> handler,
        [FromRoute] Guid userId,
        CancellationToken cancellationToken)
    {
        var query = new GetAllUserModulesQuery(userId);

        var result = await handler.HandleAsync(
            query,
            cancellationToken);

        return Ok(new ApiResponse<GetAllUserModulesResponse>(
            message: ApiMessages.RolesRetrieved,
            time: dateTimeService,
            data: result));
    }

    // Permissions
    // GetAll
    [Authorize(Policy = "Permission:Permissions.View")]
    [HttpGet("users/{userId:guid}/permissions")]
    public async Task<IActionResult> GetAllUserPermissions(
        [FromServices] IQueryHandler<GetAllUserPermissionsQuery, GetAllUserPermissionsResponse> handler,
        [FromRoute] Guid userId,
        CancellationToken cancellationToken)
    {
        var query = new GetAllUserPermissionsQuery(userId);

        var result = await handler.HandleAsync(
            query,
            cancellationToken);

        return Ok(new ApiResponse<GetAllUserPermissionsResponse>(
            message: ApiMessages.RolesRetrieved,
            time: dateTimeService,
            data: result));
    }
}
