using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/dashboard")]
[Authorize]
public sealed class AdminDashboardController : ControllerBase
{
    // Admin-level permission

    // Dashboard
    [HttpGet]
    [Authorize(Policy = "Permission:Dashboard.View")]
    public Task<IActionResult> ViewDashboard(
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
