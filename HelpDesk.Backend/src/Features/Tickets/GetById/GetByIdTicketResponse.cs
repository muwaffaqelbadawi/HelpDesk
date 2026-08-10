using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Tickets.GetById;

public sealed record GetByIdTicketResponse(
    TicketData TicketData);
