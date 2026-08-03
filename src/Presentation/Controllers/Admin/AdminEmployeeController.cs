using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/employees")]
[Authorize] // Ensures all actions require authentication
public sealed class AdminEmployeeController : ControllerBase
{

}
