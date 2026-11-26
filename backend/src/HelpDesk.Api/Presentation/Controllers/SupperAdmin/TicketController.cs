using HelpDesk.Features.Tickets.Assign;
using HelpDesk.Features.Tickets.GetAll;
using HelpDesk.Features.Tickets.GetById;
using HelpDesk.Features.Tickets.Summary;
using HelpDesk.Shared.Interfaces;
using HelpDesk.Shared.Pagination;
using HelpDesk.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.Presentation.Controllers.SupperAdmin;

[ApiController]
[Route("api/admin/tickets")]
[Authorize]
public sealed class TicketController(IDateTimeService dateTimeService) : ControllerBase
{
    // Role: "SuperAdmin"

    // GetAll
    [Authorize(Policy = "Permission:Tickets.View")]
    [HttpGet("summary")]
    public async Task<IActionResult> TicketSummary(
        [FromServices] IQueryHandler<TicketSummaryQuery, TicketSummaryResponse> handler,
        CancellationToken cancellationToken)
    {
        var query = new TicketSummaryQuery();

        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<TicketSummaryResponse>(
            message: ApiMessages.TicketSummary,
            time: dateTimeService,
            data: result));
    }

    // GetAll
    [Authorize(Policy = "Permission:Tickets.View")]
    [HttpGet]
    public async Task<IActionResult> GetTickets(
        [FromQuery] QueryParameters query,
        [FromServices] IQueryHandler<QueryParameters, GetTicketsResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<GetTicketsResponse>(
            message: ApiMessages.TicketsRetrieved,
            time: dateTimeService,
            data: result));
    }

    // GetById
    [Authorize(Policy = "Permission:Tickets.View")]
    [HttpGet("{ticketId:guid}", Name = nameof(GetByIdTicket))]
    public async Task<IActionResult> GetByIdTicket(
        [FromServices] IQueryHandler<GetByIdTicketQuery, GetByIdTicketResponse> handler,
        [FromRoute] Guid ticketId,
        CancellationToken cancellationToken)
    {
        var query = new GetByIdTicketQuery(ticketId);

        var result = await handler.HandleAsync(
            query,
            cancellationToken);

        return Ok(new ApiResponse<GetByIdTicketResponse>(
            message: ApiMessages.TicketRetrieved,
            time: dateTimeService,
            data: result));
    }

    // AssignTicket
    [Authorize(Policy = "Permission:Tickets.Assign")]
    [HttpPost("{userId:guid}/tickets")]
    public async Task<IActionResult> AssignTicket(
         [FromServices] ICommandHandler<AssignTicketCommand, AssignTicketResponse> handler,
         [FromRoute] Guid userId,
         [FromBody] AssignTicketBody body,
         CancellationToken cancellationToken)
    {
        var command = new AssignTicketCommand(
            UserId: userId,
            TicketId: body.TicketId,
            TicketRowVersion: body.TicketRowVersion);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<AssignTicketResponse>(
            message: ApiMessages.TicketAssigned,
            time: dateTimeService,
            data: result));
    }
}
