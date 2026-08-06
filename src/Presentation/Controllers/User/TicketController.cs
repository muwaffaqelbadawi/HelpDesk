using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Features.Tickets.Delete;
using HelpDesk.src.Features.Tickets.GetById;
using HelpDesk.src.Features.Tickets.Update;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.User;

[ApiController]
[Route("api/tickets")]
[Authorize]
public sealed class TicketController : ControllerBase
{
    private readonly IDateTimeService _dateTimeService;

    public TicketController(
        IDateTimeService dateTimeService)
    {
        _dateTimeService = dateTimeService;
    }

    // GetTickets
    [HttpGet]
    public async Task<IActionResult> GetTickets(
        [FromServices] IQueryHandler<PagedQuery, PagedResult<TicketData>> handler,
        CancellationToken cancellationToken)
    {
        var query = new PagedQuery();

        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<PagedResult<TicketData>>(
            message: ApiMessages.TicketsRetrieved,
            time: _dateTimeService.UtcNow,
            data: result));
    }

    // GetByIdTicket
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

    // CreateTicket
    [HttpPost]
    public async Task<IActionResult> CreateTicket(
        [FromServices] ICommandHandler<CreateTicketCommand, CreateTicketResponse> handler,
        [FromBody] CreateTicketBody body,
        CancellationToken cancellationToken)
    {
        var command = new CreateTicketCommand(
            TicketTitle: body.TicketTitle,
            TicketSubject: body.TicketSubject,
            TicketPriorityId: body.TicketPriorityId);

        var result = await handler.HandleAsync(command, cancellationToken);

        var value = new ApiResponse<CreateTicketResponse>(
            message: ApiMessages.TicketCreated,
            time: _dateTimeService.UtcNow,
            data: result);

        return CreatedAtRoute(
            routeName: nameof(GetByIdTicket),
            routeValues: new { ticketId = result.TicketData.TicketId },
            value: value);
    }

    // UpdateTicket
    [HttpPut("{ticketId:guid}")]
    public async Task<IActionResult> UpdateTicket(
        [FromServices] ICommandHandler<UpdateTicketCommand, UpdateTicketResponse> handler,
        [FromRoute] Guid ticketId,
        [FromBody] UpdateTicketBody body,
        CancellationToken cancellationToken)
    {
        var command = new UpdateTicketCommand(
            TicketId: ticketId,
            TicketTitle: body.TicketTitle,
            TicketSubject: body.TicketSubject,
            TicketPriorityId: body.TicketPriorityId,
            TicketStatusId: body.TicketStatusId,
            TicketRowVersion: body.TicketRowVersion);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<UpdateTicketResponse>(
            message: ApiMessages.TicketUpdated,
            time: _dateTimeService.UtcNow,
            data: result));
    }

    // Delete Ticket
    [HttpDelete("{ticketId:guid}")]
    public async Task<IActionResult> DeleteTicket(
        [FromServices] ICommandHandler<DeleteTicketCommand> handler,
        [FromRoute] Guid ticketId,
        [FromBody] DeleteTicketBody body,
        CancellationToken cancellationToken)
    {
        var command = new DeleteTicketCommand(
            TicketId: ticketId,
            TicketRowVersion: body.TicketRowVersion);

        await handler.HandleAsync(command, cancellationToken);

        return NoContent();
    }
}
