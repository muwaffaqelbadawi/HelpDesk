using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Features.Tickets.Delete;
using HelpDesk.src.Features.Tickets.GetAssigned;
using HelpDesk.src.Features.Tickets.GetByIdOwned;
using HelpDesk.src.Features.Tickets.GetOwned;
using HelpDesk.src.Features.Tickets.Update;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.User;

public sealed class TicketController : ControllerBase
{
    // Self-Service

    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public TicketController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }

    // GetCurrent (self-tickets)
    [HttpGet("me/tickets")]
    [Authorize]
    public async Task<IActionResult> GetCurrentTickets(
        [FromQuery] PagedQuery query,
        [FromServices] IQueryHandler<OwnedTicketResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<OwnedTicketResponse>(
            message: ApiMessages.TicketsRetrieved,
            time: _dateTimeService.UtcNow,
            data: result));
    }

    // GetByIdOwned
    [Authorize]
    [HttpGet("me/tickets{ticketId:guid}", Name = nameof(GetByIdOwnedTicket))]
    public async Task<IActionResult> GetByIdOwnedTicket(
        [FromServices] IQueryHandler<GetByIdOwnedTicketQuery, GetByIdOwnedTicketResponse> handler,
        [FromRoute] Guid ticketId,
        CancellationToken cancellationToken)
    {
        var query = new GetByIdOwnedTicketQuery(ticketId);

        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<GetByIdOwnedTicketResponse>(
            message: ApiMessages.TicketRetrieved,
            time: _dateTimeService.UtcNow,
            data: result));
    }

    // Create
    [HttpPost("me/tickets")]
    public async Task<IActionResult> CreateTicket(
        [FromServices] ICommandHandler<CreateTicketCommand, CreateTicketResponse> handler,
        [FromBody] CreateTicketBody body,
        CancellationToken cancellationToken)
    {
        var command = new CreateTicketCommand(
            TicketTitle: body.TicketTitle,
            TicketSubject: body.TicketSubject);

        var result = await handler.HandleAsync(command, cancellationToken);

        var value = new ApiResponse<CreateTicketResponse>(
            message: ApiMessages.TicketCreated,
            time: _dateTimeService.UtcNow,
            data: result);

        return CreatedAtRoute(
            routeName: nameof(GetByIdOwnedTicket),
            routeValues: new { ticketId = result.TicketData.TicketId },
            value: value);
    }

    // Update
    [HttpPut("me/tickets/{ticketId:guid}")]
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

    // Delete
    [HttpDelete("me/tickets/{ticketId:guid}")]
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

    // GetAssigned
    [HttpGet("me/tickets/assigned")]
    public async Task<IActionResult> GetAssignedTickets(
        [FromServices] IQueryHandler<AssignedTicketsResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<AssignedTicketsResponse>(
            message: ApiMessages.TicketsRetrieved,
            time: _dateTimeService.UtcNow,
            data: result));
    }
}
