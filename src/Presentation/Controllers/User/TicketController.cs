using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Features.Tickets.GetById;
using HelpDesk.src.Features.Tickets.Update;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.User;

[ApiController]
[Route("api/tickets")]
[Authorize]
public sealed class TicketController : ControllerBase
{
    // Self-service


    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public TicketController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }


    // GetTickets









    // GetByIdTicket
    [HttpGet("ticketId")]
    public async Task<IActionResult> GetByIdTicket(
        [FromServices] IQueryHandler<GetByIdTicketQuery, GetByIdTicketResponse> handler,
        [FromRoute] Guid ticketId,
        CancellationToken cancellationToken)
    {
        var query = new GetByIdTicketQuery(ticketId);

        var result = await handler.HandleAsync(query, cancellationToken);

        return Ok(new ApiResponse<GetByIdTicketResponse>(
            message: "Ticket created successfully.",
            time: _dateTimeService.UtcNow,
            data: result));
    }






    // Create Ticket
    [HttpPost]
    public async Task<IActionResult> CreateTicket(
        [FromServices] ICommandHandler<CreateTicketCommand, CreateTicketResponse> handler,
        [FromBody] CreateTicketBody body,
        CancellationToken cancellationToken)
    {
        var command = new CreateTicketCommand(
            Title: body.Title,
            Subject: body.Subject,
            PriorityId: body.PriorityId);

        var result = await handler.HandleAsync(
            command,
            cancellationToken);

        return Ok(new ApiResponse<CreateTicketResponse>(
            message: "Ticket created successfully.",
            time: _dateTimeService.UtcNow,
            data: result));
    }





    // Update Ticket
    [HttpPut("{ticketId:guid}", Name = "UserUpdateTicket")]
    public async Task<IActionResult> UpdateTicket(
        [FromServices] ICommandHandler<UpdateTicketCommand, UpdateTicketResponse> handler,
        [FromRoute] Guid ticketId,
        [FromBody] UpdateTicketBody body,
        CancellationToken cancellationToken)
    {
        var command = new UpdateTicketCommand(
            ticketId,
            body.Title,
            body.Subject,
            body.PriorityId,
            body.StatusId,
            body.ExpectedRowVersion);

        await handler.HandleAsync(command, cancellationToken);

        // Return 204 No Content
        return NoContent();
    }



    // Delete Ticket
}
