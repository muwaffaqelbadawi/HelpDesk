using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using HelpDesk.src.Shared.Responses.Root;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Root;

[ApiController]
[Route("/")]
public sealed class RootController(IDateTimeService dateTimeService) : ControllerBase
{
    // Api info

    [HttpGet]
    public IActionResult GetApiInfo()
    {
        return Ok(new ApiResponse<ApiInfo>(
            message: ApiMessages.ApiInfo,
            time: dateTimeService.UtcNow,
            data: new ApiInfo
            {
                Name = "HelpDesk API",
                Version = "1.0.0",
                Status = "Running"
            }));
    }

    // API health

    [HttpGet("health")]
    public IActionResult GetHealth()
    {
        return Ok(new ApiResponse<ApiHealth>(
            message: ApiMessages.ApiHealthy,
            time: dateTimeService.UtcNow,
            data: new ApiHealth
            {
                Status = "Healthy"
            }));
    }
}
