using HelpDesk.Features.Tickets.GetAssigned;
using HelpDesk.Shared.Interfaces;
using HelpDesk.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.Presentation.Controllers.Support;

[ApiController]
[Route("api/me/tickets")]
[Authorize]
public sealed class TicketController(IDateTimeService dateTimeService) : ControllerBase
{
    // Role: "Support"

    [HttpGet("assigned")]
    [Authorize(Policy = "Permission:Tickets.Assigned")]
    public async Task<IActionResult> GetAssignedTickets(
        [FromServices] IQueryHandler<AssignedTicketsResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<AssignedTicketsResponse>(
            message: ApiMessages.TicketAssigned,
            time: dateTimeService,
            data: result));
    }
}
