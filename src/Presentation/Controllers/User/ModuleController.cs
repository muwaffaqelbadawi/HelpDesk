using HelpDesk.src.Features.Modules.GetCurrent;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.User;

[ApiController]
[Route("api/modules")]
[Authorize]
public sealed class ModuleController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public ModuleController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }

    // Get all modules
    [HttpGet("me")]
    public async Task<IActionResult> GetCurrentModules(
        [FromServices] IQueryHandler<CurrentModulesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<CurrentModulesResponse>(
            message: "Modules retrieved successfully.",
            time: _dateTimeService.UtcNow,
            data: result));
    }
}
