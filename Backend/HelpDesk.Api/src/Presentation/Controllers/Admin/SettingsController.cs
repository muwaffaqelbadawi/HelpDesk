using HelpDesk.src.Features.Settings.Admin.Branches.Get;
using HelpDesk.src.Features.Settings.Admin.Branches.Set;
using HelpDesk.src.Features.Settings.Admin.Companies.Get;
using HelpDesk.src.Features.Settings.Admin.Companies.Set;
using HelpDesk.src.Features.Settings.Admin.Departments.Get;
using HelpDesk.src.Features.Settings.Admin.Departments.Set;
using HelpDesk.src.Features.Settings.Admin.Modules.GetAll;
using HelpDesk.src.Features.Settings.Admin.Permissions.GetAll;
using HelpDesk.src.Features.Settings.Admin.Roles.Assign;
using HelpDesk.src.Features.Settings.Admin.Roles.Delete;
using HelpDesk.src.Features.Settings.Admin.Roles.GetAll;
using HelpDesk.src.Features.Settings.Admin.Roles.Update;
using HelpDesk.src.Features.Settings.Admin.Sectors.Get;
using HelpDesk.src.Features.Settings.Admin.Sectors.Set;
using HelpDesk.src.Features.Settings.Admin.Tickets.Priorities.Set;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/settings")]
[Authorize]
public sealed class SettingsController(IDateTimeService dateTimeService) : ControllerBase
{
    // Role: "Admin"

    // Roles
    // AssignRole
    [Authorize(Policy = "Permission:Settings.Assign")]
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
    [HttpGet("users/{userId:guid}/roles")]
    [Authorize(Policy = "Permission:Settings.View")]
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
    [Authorize(Policy = "Permission:Settings.Update")]
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
    [Authorize(Policy = "Permission:Settings.Delete")]
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
    [HttpGet("users/{userId:guid}/modules")]
    [Authorize(Policy = "Permission:Settings.View")]
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
    [HttpGet("users/{userId:guid}/permissions")]
    [Authorize(Policy = "Permission:Settings.View")]
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

    // Branches
    // GetAll
    [HttpGet("get-branches")]
    [Authorize(Policy = "Permission:Settings.View")]
    public async Task<IActionResult> GetAllBranches(
        [FromServices] IQueryHandler<GetAllBranchesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<GetAllBranchesResponse>(
            message: ApiMessages.BranchesRetrieved,
            time: dateTimeService,
            data: result));
    }

    // Branches
    // Set
    [HttpPut("{userId:guid}/set-branch")]
    [Authorize(Policy = "Permission:Settings.Set")]
    public async Task<IActionResult> SetBranche(
        [FromServices] ICommandHandler<SetBranchCommand, SetBranchResponse> handler,
        [FromRoute] Guid userId,
        [FromBody] SetBranchBody body,
        CancellationToken cancellationToken)
    {
        var command = new SetBranchCommand(
            userId,
            body.BranchId);

        var result = await handler.HandleAsync(
            command,
            cancellationToken);

        return Ok(new ApiResponse<SetBranchResponse>(
            message: ApiMessages.UserBranchSet,
            time: dateTimeService,
            data: result));
    }

    // Departments
    // GetAll
    [HttpGet("get-departments")]
    [Authorize(Policy = "Permission:Settings.View")]
    public async Task<IActionResult> GetAllDepartments(
        [FromServices] IQueryHandler<GetAllDepartmentsResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<GetAllDepartmentsResponse>(
            message: ApiMessages.DepartmentsRetrieved,
            time: dateTimeService,
            data: result));
    }

    // Departments
    // Set
    [HttpPut("{userId:guid}/set-department")]
    [Authorize(Policy = "Permission:Settings.Set")]
    public async Task<IActionResult> SetDepartment(
        [FromServices] ICommandHandler<SetDepartmentCommand, SetDepartmentResponse> handler,
        [FromRoute] Guid userId,
        [FromBody] SetDepartmentBody body,
        CancellationToken cancellationToken)
    {
        var command = new SetDepartmentCommand(
            userId,
            body.DepartmentId);

        var result = await handler.HandleAsync(
            command,
            cancellationToken);

        return Ok(new ApiResponse<SetDepartmentResponse>(
            message: ApiMessages.UserDepartmentSet,
            time: dateTimeService,
            data: result));
    }

    // Sectors
    // GetAll
    [HttpGet("get-sectors")]
    [Authorize(Policy = "Permission:Settings.View")]
    public async Task<IActionResult> GetAllSectors(
        [FromServices] IQueryHandler<GetAllSectorsResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<GetAllSectorsResponse>(
            message: ApiMessages.SectorsRetrieved,
            time: dateTimeService,
            data: result));
    }

    // Sectors
    // Set
    [HttpPut("{userId:guid}/set-sector")]
    [Authorize(Policy = "Permission:Settings.Set")]
    public async Task<IActionResult> SetSector(
        [FromServices] ICommandHandler<SetSectorCommand, SetSectorResponse> handler,
        [FromRoute] Guid userId,
        [FromBody] SetSectorBody body,
        CancellationToken cancellationToken)
    {
        var command = new SetSectorCommand(
            userId,
            body.SectorId);

        var result = await handler.HandleAsync(
            command,
            cancellationToken);

        return Ok(new ApiResponse<SetSectorResponse>(
            message: ApiMessages.UserSectorSet,
            time: dateTimeService,
            data: result));
    }

    // Companies
    // GetAll
    [HttpGet("get-companies")]
    [Authorize(Policy = "Permission:Settings.View")]
    public async Task<IActionResult> GetAllCompanies(
        [FromServices] IQueryHandler<GetAllCompaniesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<GetAllCompaniesResponse>(
            message: ApiMessages.CompaniesRetrieved,
            time: dateTimeService,
            data: result));
    }

    // Companies
    // Set
    [HttpPut("{userId:guid}/set-company")]
    [Authorize(Policy = "Permission:Settings.Set")]
    public async Task<IActionResult> SetCompany(
        [FromServices] ICommandHandler<SetCompanyCommand, SetCompanyResponse> handler,
        [FromRoute] Guid userId,
        [FromBody] SetCompanyBody body,
        CancellationToken cancellationToken)
    {
        var command = new SetCompanyCommand(
            userId,
            body.CompanyId);

        var result = await handler.HandleAsync(
            command,
            cancellationToken);

        return Ok(new ApiResponse<SetCompanyResponse>(
            message: ApiMessages.UserCompanySet,
            time: dateTimeService,
            data: result));
    }

    // TicketPriority
    // Set
    [HttpPut("{userId:guid}/set-ticket-priority")]
    [Authorize(Policy = "Permission:Settings.Set")]
    public async Task<IActionResult> SetTicketPriority(
        [FromServices] ICommandHandler<SetTicketPriorityCommand, SetTicketPriorityResponse> handler,
        [FromRoute] Guid userId,
        [FromBody] SetTicketPriorityBody body,
        CancellationToken cancellationToken)
    {
        var command = new SetTicketPriorityCommand(
            userId,
            body.TicketId,
            body.PriorityId);

        var result = await handler.HandleAsync(
            command,
            cancellationToken);

        return Ok(new ApiResponse<SetTicketPriorityResponse>(
            message: ApiMessages.UserCompanySet,
            time: dateTimeService,
            data: result));
    }
}
