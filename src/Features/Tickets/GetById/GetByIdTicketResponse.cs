using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Tickets.GetById;

public sealed record GetByIdTicketResponse(
    TicketData TicketData);
