using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Infrastructure.Services.Api;

[ApiController]
[Route("/")]
public sealed class ApiController(IDateTimeService dateTimeService) : ControllerBase
{
    // Api info

    [HttpGet]
    public IActionResult GetApiInfo()
    {
        return Ok(new ApiResponse<ApiInfo>(
            message: ApiMessages.ApiInfo,
            time: dateTimeService,
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
            time: dateTimeService,
            data: new ApiHealth
            {
                Status = "Healthy"
            }));
    }
}
