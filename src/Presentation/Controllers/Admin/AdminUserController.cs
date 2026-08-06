using HelpDesk.src.Features.Users.UserAccount.Create;
using HelpDesk.src.Features.Users.UserAccount.Delete;
using HelpDesk.src.Features.Users.UserAccount.GetById;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/users")]
[Authorize]
public sealed class AdminUserController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public AdminUserController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }

    // GetAll (Get users list)
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

    // GetById (Get user details)
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
