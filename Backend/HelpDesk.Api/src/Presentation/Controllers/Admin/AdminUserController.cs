using HelpDesk.src.Features.Users.Create;
using HelpDesk.src.Features.Users.Delete;
using HelpDesk.src.Features.Users.GetById;
using HelpDesk.src.Features.Users.Update;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.QueryParameters;
using HelpDesk.src.Shared.Responses;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/users")]
[Authorize]
public sealed class AdminUserController(IDateTimeService dateTimeService) : ControllerBase
{
    // GetAll
    [HttpGet]
    [Authorize(Policy = "Permission:Users.View")]
    public async Task<IActionResult> GetUsersAccount(
        [FromQuery] GetUsersParameters query,
        [FromServices] IQueryHandler<GetUsersParameters, PagedResult<UserAccountData>> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<PagedResult<UserAccountData>>(
            message: ApiMessages.UsersRetrieved,
            time: dateTimeService,
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
            time: dateTimeService,
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
            PhoneNumber: body.PhoneNumber,
            FullEnName: body.FullEnName,
            FullArName: body.FullArName,
            JobTitle: body.JobTitle,
            DepartmentId: body.DepartmentId,
            SectorId: body.SectorId,
            CountryId: body.CountryId);

        var result = await handler.HandleAsync(command, cancellationToken);

        var value = new ApiResponse<CreateUserAccountResponse>(
            message: ApiMessages.UsersCreated,
            time: dateTimeService,
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
            time: dateTimeService,
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
}
