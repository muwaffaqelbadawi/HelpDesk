using HelpDesk.src.Features.Users.Create;
using HelpDesk.src.Features.Users.Delete;
using HelpDesk.src.Features.Users.GetAll;
using HelpDesk.src.Features.Users.GetById;
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

    // Get all users
    [HttpGet]
    [Authorize(Policy = "Permission:Users.Get")]
    public async Task<IActionResult> GetUsers(
        [FromServices] IQueryHandler<PagedQuery, PagedResult<GetUsersResponse>> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(
            new PagedQuery(),
            cancellationToken);

        return Ok(new ApiResponse<PagedResult<GetUsersResponse>>(
            message: "Users fetched successfully.",
            time: _dateTimeService.UtcNow,
            data: result));
    }






    // GET By ID User (Get user details)
    [HttpGet("{userId}", Name = "GetByIdUser")]
    [Authorize(Policy = "Permission:Users.Get")]
    public async Task<IActionResult> GetByIdUser(
        [FromServices] IQueryHandler<GetByIdUserQuery, GetByIdUserResponse> handler,
        [FromServices] IDateTimeService dateTimeService,
        [FromRoute] string userId,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(
            new GetByIdUserQuery(userId),
            cancellationToken);

        return Ok(new ApiResponse<UserData>(
            message: "User created successfully.",
            time: dateTimeService.UtcNow,
            data: result.UserData));
    }




    // Create User
    [HttpPost]
    [Authorize(Policy = "Permission:Users.Create")]
    public async Task<IActionResult> CreateUser(
        [FromServices] ICommandHandler<CreateUserCommand, CreateUserResponse> handler,
        [FromBody] CreateUserBody body,
        CancellationToken cancellationToken)
    {
        var command = new CreateUserCommand(body.UserName, body.Email);

        var result = await handler.HandleAsync(command, cancellationToken);

        var value = new ApiResponse<CreateUserResponse>(
            message: "User created successfully.",
            time: _dateTimeService.UtcNow,
            data: result);

        return CreatedAtRoute(
            routeName: "GetByIdUser", // must match the name property in the GetByIdUser endpoint
            routeValues: new { userId = result.UserData.UserId },
            value: value);
    }





    // Delete User
    [HttpDelete("{userId:guid}")]
    [Authorize(Policy = "Permission:Users.Delete")]
    public async Task<IActionResult> DeleteUser(
        [FromServices] ICommandHandler<DeleteUserCommand> handler,
        [FromBody] DeleteUserBody body,
        [FromRoute] Guid userId,
        CancellationToken cancellationToken)
    {
        var command = new DeleteUserCommand(userId, body.ExpectedRowVersion);

        await handler.HandleAsync(command, cancellationToken);

        return NoContent();
    }
}
