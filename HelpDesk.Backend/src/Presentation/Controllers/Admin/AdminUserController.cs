using HelpDesk.src.Features.Roles.Assign;
using HelpDesk.src.Features.Roles.Delete;
using HelpDesk.src.Features.Roles.GetAll;
using HelpDesk.src.Features.Roles.GetById;
using HelpDesk.src.Features.Roles.Update;
using HelpDesk.src.Features.Users.UserAccount.Create;
using HelpDesk.src.Features.Users.UserAccount.Delete;
using HelpDesk.src.Features.Users.UserAccount.GetById;
using HelpDesk.src.Features.Users.UserAccount.Update;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/users")]
[Authorize]
public sealed class AdminUserController : ControllerBase
{
    // Admin
    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public AdminUserController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }

    // Users

    // GetAll
    [HttpGet]
    [Authorize(Policy = "Permission:Users.View")]
    public async Task<IActionResult> GetUsersAccount(
        [FromServices] IQueryHandler<PagedQuery, PagedResult<UserAccountData>> handler,
        CancellationToken cancellationToken)
    {
        var query = new PagedQuery();

        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<PagedResult<UserAccountData>>(
            message: ApiMessages.UsersRetrieved,
            time: _dateTimeService.UtcNow,
            data: result));
    }

    // GetById
    [HttpGet("{userId:guid}", Name = nameof(GetByIdUserAccount))]
    [Authorize(Policy = "Permission:Users.View")]
    public async Task<IActionResult> GetByIdUserAccount(
        [FromServices] IQueryHandler<GetByIdUserAccountQuery, GetByIdUserAccountResponse> handler,
        [FromServices] IDateTimeService dateTimeService,
        [FromRoute] Guid userId,
        CancellationToken cancellationToken)
    {
        var query = new GetByIdUserAccountQuery(userId);

        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<UserAccountData>(
            message: ApiMessages.UserRetrieved,
            time: dateTimeService.UtcNow,
            data: result.UserAccountData));
    }

    // Create
    [HttpPost]
    [Authorize(Policy = "Permission:Users.Create")]
    public async Task<IActionResult> CreateUserAccount(
        [FromServices] ICommandHandler<CreateUserAccountCommand, CreateUserAccountResponse> handler,
        [FromBody] CreateUserAccountBody body,
        CancellationToken cancellationToken)
    {
        var command = new CreateUserAccountCommand(
            UserName: body.UserName,
            Email: body.Email,
            FullEnName: body.FullEnName,
            FullArName: body.FullArName);

        var result = await handler.HandleAsync(command, cancellationToken);

        var value = new ApiResponse<CreateUserAccountResponse>(
            message: ApiMessages.UsersCreated,
            time: _dateTimeService.UtcNow,
            data: result);

        return CreatedAtRoute(
            routeName: nameof(GetByIdUserAccount),
            routeValues: new { userId = result.UserAccountData.UserId },
            value: value);
    }

    // Update
    [HttpPut("{userId:guid}")]
    [Authorize(Policy = "Permission:Users.Update")]
    public async Task<IActionResult> UpdateUserAccount(
        [FromServices] ICommandHandler<UpdateUserAccountCommand, UpdateUserAccountResponse> handler,
        [FromServices] IDateTimeService dateTimeService,
        [FromRoute] Guid userId,
        [FromBody] UpdateUserAccountBody body,
        CancellationToken cancellationToken)
    {
        var query = new UpdateUserAccountCommand(
            UserId: userId,
            UserName: body.UserName,
            Email: body.Email,
            FullEnName: body.FullEnName,
            FullArName: body.FullArName,
            UserRowVersion: body.UserRowVersion,
            EmployeeRowVersion: body.EmployeeRowVersion);

        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<UpdateUserAccountResponse>(
            message: ApiMessages.UserRetrieved,
            time: dateTimeService.UtcNow,
            data: result));
    }

    // Delete
    [HttpDelete("{userId:guid}")]
    [Authorize(Policy = "Permission:Users.Delete")]
    public async Task<IActionResult> DeleteUserAccount(
        [FromServices] ICommandHandler<DeleteUserAccountCommand> handler,
        [FromBody] DeleteUserAccountBody body,
        [FromRoute] Guid userId,
        CancellationToken cancellationToken)
    {
        var command = new DeleteUserAccountCommand(
            UserId: userId,
            UserRowVersion: body.UserRowVersion,
            EmployeeRowVersion: body.EmployeeRowVersion);

        await handler.HandleAsync(command, cancellationToken);

        return NoContent();
    }

    // ----------------------------------------------------------------------------------------

    // Roles

    // GetAll
    [HttpGet("roles")]
    [Authorize(Policy = "Permission:Roles.View")]
    public async Task<IActionResult> GetRoles(
        [FromServices] IQueryHandler<RolesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<IReadOnlyCollection<RoleData>>(
            message: ApiMessages.RolesRetrieved,
            time: _dateTimeService.UtcNow,
            data: result.Roles));
    }

    // GetById a user with their roles
    [HttpGet("{userId}/roles")]
    [Authorize(Policy = "Permission:Roles.View")]
    public async Task<IActionResult> GetRole(
        [FromServices] IQueryHandler<GetByIdRoleQuery, GetByIdRoleResponse> handler,
        [FromRoute] Guid userId,
        CancellationToken cancellationToken)
    {
        var query = new GetByIdRoleQuery(userId);

        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<GetByIdRoleResponse>(
            message: ApiMessages.RoleRetrieved,
            time: _dateTimeService.UtcNow,
            data: result));
    }

    // UpdateRole
    [Authorize(Policy = "Permission:Roles.Update")]
    [HttpPut("{userId:guid}/roles")]
    public async Task<IActionResult> UpdateRole(
         [FromServices] ICommandHandler<UpdateRoleCommand, UpdateRoleResponse> handler,
         [FromRoute] Guid userId,
         [FromBody] UpdateRoleBody body,
         CancellationToken cancellationToken)
    {
        var command = new UpdateRoleCommand(
            UserId: userId,
            RoleId: body.RoleId);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<UpdateRoleResponse>(
            message: ApiMessages.RoleUpdated,
            time: _dateTimeService.UtcNow,
            data: result));
    }

    // DeleteRole
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

        await handler.HandleAsync(command, cancellationToken);

        return NoContent();
    }

    // AssignRole
    [Authorize(Policy = "Permission:Roles.Assign")]
    [HttpPost("{userId:guid}/roles")]
    public async Task<IActionResult> AssignRole(
         [FromServices] ICommandHandler<AssignRoleCommand, AssignRoleResponse> handler,
         [FromRoute] Guid userId,
         [FromBody] AssignRoleBody body,
         CancellationToken cancellationToken)
    {
        var command = new AssignRoleCommand(
            UserId: userId,
            RoleId: body.RoleId);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<AssignRoleResponse>(
            message: ApiMessages.RoleAssigned,
            time: _dateTimeService.UtcNow,
            data: result));
    }
}
