using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Tickets.Assign;

public sealed record AssignTicketResponse(
    TicketData TicketData);
