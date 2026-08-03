using HelpDesk.src.Features.Roles.GetCurrent;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.User;


[ApiController]
[Route("api/roles")]
[Authorize]
public sealed class RoleController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public RoleController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }

    // Get all roles
    [HttpGet("me")]
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
}
