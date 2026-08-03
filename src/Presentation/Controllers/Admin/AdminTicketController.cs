using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/tickets")]
[Authorize] // Ensures all actions require authentication
public class AdminTicketController : ControllerBase
{

}
