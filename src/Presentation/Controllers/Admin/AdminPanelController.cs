using HelpDesk.src.Features.Dashboard;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;


[ApiController]
[Route("api/admin/panel")]
[Authorize]
public sealed class AdminPanelController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public AdminPanelController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }



    // Dashboard
    [HttpGet]
    [Authorize(Policy = "Permission:Users.Dashboard")]
    public async Task<IActionResult> Dashboard(
        [FromServices] IQueryHandler<PagedQuery, PagedResult<DashboardResponse>> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(
            new PagedQuery(),
            cancellationToken);


        throw new NotImplementedException();


        //return Ok(new ApiResponse<PagedResult<GetUsersResponse>>(
        //    message: "Users fetched successfully.",
        //    time: _dateTimeService.UtcNow,
        //    data: result));
    }
}
