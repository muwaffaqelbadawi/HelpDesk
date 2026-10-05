using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Features.Tickets.Delete;
using HelpDesk.src.Features.Tickets.GetAssigned;
using HelpDesk.src.Features.Tickets.GetMy;
using HelpDesk.src.Features.Tickets.Update;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.User;

public sealed class TicketController(IDateTimeService dateTimeService) : ControllerBase
{
    // Self-Service

    // GetCurrent (self-tickets)
    [HttpGet("me/tickets")]
    [Authorize]
    public async Task<IActionResult> GetCurrentTickets(
        [FromServices] IQueryHandler<GetMyTicketsResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<GetMyTicketsResponse>(
            message: ApiMessages.TicketsRetrieved,
            time: dateTimeService,
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
            time: dateTimeService,
            data: result);

        var ticketId = result.TicketData.TicketId;

        return CreatedAtRoute(
            routeValues: new { ticketId },
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
            time: dateTimeService,
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
            time: dateTimeService,
            data: result));
    }
}
