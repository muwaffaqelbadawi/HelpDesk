using HelpDesk.src.Features.Permissions.GetCurrent;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.User;


[ApiController]
[Route("api/permissions")]
[Authorize]
public sealed class PermissionController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public PermissionController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }

    // Get all Permissions
    [HttpGet("me")]
    public async Task<IActionResult> GetCurrentPermissions(
        [FromServices] IQueryHandler<CurrentPermissionsResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<CurrentPermissionsResponse>(
            message: "Permissions retrieved successfully.",
            time: _dateTimeService.UtcNow,
            data: result));
    }
}
