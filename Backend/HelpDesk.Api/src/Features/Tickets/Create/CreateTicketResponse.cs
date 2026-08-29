using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Tickets.Create;

public sealed record CreateTicketResponse(
    TicketData TicketData);
