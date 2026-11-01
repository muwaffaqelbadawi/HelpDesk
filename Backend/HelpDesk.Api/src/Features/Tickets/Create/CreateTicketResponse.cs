using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Tickets.Create;

public sealed record CreateTicketResponse(
    TicketData TicketData);
