using HelpDesk.src.Features.Tickets.Assign;
using HelpDesk.src.Features.Tickets.GetById;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/tickets")]
[Authorize]
public sealed class AdminTicketController : ControllerBase
{
    // Admin
    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public AdminTicketController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }

    // GetAll
    [Authorize(Policy = "Permission:Tickets.View")]
    [HttpGet]
    public async Task<IActionResult> GetTickets(
        [FromQuery] PagedQuery query,
        [FromServices] IQueryHandler<PagedQuery, PagedResult<TicketData>> handler,
       CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<PagedResult<TicketData>>(
            message: ApiMessages.TicketsRetrieved,
            time: _dateTimeService.UtcNow,
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

        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<GetByIdTicketResponse>(
            message: ApiMessages.TicketRetrieved,
            time: _dateTimeService.UtcNow,
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
            time: _dateTimeService.UtcNow,
            data: result));
    }
}
