using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/dashboard")]
[Authorize]
public sealed class AdminDashboardController : ControllerBase
{
    // Admin-level permission

    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public AdminDashboardController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }

    // Dashboard
    [HttpGet]
    [Authorize(Policy = "Permission:Dashboard.View")]
    public Task<IActionResult> ViewDashboard(
        //[FromServices] IQueryHandler<, >> handler,
        CancellationToken cancellationToken)
    {
        //var result = await handler.HandleAsync(query, cancellationToken);

        //var result = new DashboardData();

        //return Ok(new ApiResponse<DashboardData>(
        //    message: ApiMessages.UsersRetrieved,
        //    time: _dateTimeService.UtcNow,
        //    data: result));

        throw new NotImplementedException();
    }
}
