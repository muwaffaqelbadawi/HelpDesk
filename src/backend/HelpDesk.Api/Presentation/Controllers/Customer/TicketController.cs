using HelpDesk.Features.Tickets.Create;
using HelpDesk.Features.Tickets.Delete;
using HelpDesk.Features.Tickets.GetMy;
using HelpDesk.Features.Tickets.Update;
using HelpDesk.Shared.Interfaces;
using HelpDesk.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.Presentation.Controllers.Customer;

[ApiController]
[Route("api/me/tickets")]
[Authorize]
public sealed class TicketController(IDateTimeService dateTimeService) : ControllerBase
{
    // Role: "Customer"

    [HttpGet]
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
    [HttpPost]
    public async Task<IActionResult> CreateTicket(
        [FromServices] ICommandHandler<CreateTicketCommand, CreateTicketResponse> handler,
        [FromForm] CreateTicketForm form,
        CancellationToken cancellationToken)
    {
        var command = new CreateTicketCommand(
            TicketTitle: form.TicketTitle,
            TicketSubject: form.TicketSubject,
            CommentContent: form.CommentContent,
            Attachments: form.Attachments);

        var result = await handler.HandleAsync(
            command,
            cancellationToken);

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
            time: dateTimeService,
            data: result));
    }

    // Delete
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
