using HelpDesk.src.Features.Users.GetMy;
using HelpDesk.src.Features.Users.Settings.SetTimeZone;
using HelpDesk.src.Features.Users.UpdateMy;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Customer;

[ApiController]
[Route("api/users/me")]
[Authorize]
public sealed class UserController(IDateTimeService dateTimeService) : ControllerBase
{
    // Role: "Customer"

    // Get
    [HttpGet]
    public async Task<IActionResult> GetMytUserAccount(
        [FromServices] IQueryHandler<GetMyUserAccountResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<GetMyUserAccountResponse>(
            message: ApiMessages.UserRetrieved,
            time: dateTimeService,
            data: result));
    }

    // Update
    [HttpPut]
    public async Task<IActionResult> UpdateMyUserAccount(
        [FromServices] ICommandHandler<UpdateMyUserAccountCommand, UpdateMyUserAccountResponse> handler,
        [FromBody] UpdateMyUserAccountBody body,
        CancellationToken cancellationToken)
    {
        var command = new UpdateMyUserAccountCommand(
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

    // Get TimeZone
    //[HttpGet("time-zone")]
    //public async Task<IActionResult> GetAllTimeZones(
    //    [FromServices] ICommandHandler<GetTimeZoneCommand, GetTimeZoneResponse> handler,
    //    [FromBody] GetTimeZoneBody body,
    //    CancellationToken cancellationToken)
    //{
    //    var command = new GetTimeZoneCommand(body.TimeZoneId);

    //    var result = await handler.HandleAsync(command, cancellationToken);

    //    return Ok(new ApiResponse<GetTimeZoneResponse>(
    //        message: ApiMessages.UserTimeZoneSet,
    //        time: dateTimeService,
    //        data: result));
    //}

    // Set TimeZone
    [HttpPut("time-zone")]
    public async Task<IActionResult> SetTimeZone(
        [FromServices] ICommandHandler<SetTimeZoneCommand, SetTimeZoneResponse> handler,
        [FromBody] SetTimeZoneBody body,
        CancellationToken cancellationToken)
    {
        var command = new SetTimeZoneCommand(body.TimeZoneId);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<SetTimeZoneResponse>(
            message: ApiMessages.UserTimeZoneSet,
            time: dateTimeService,
            data: result));
    }
}
