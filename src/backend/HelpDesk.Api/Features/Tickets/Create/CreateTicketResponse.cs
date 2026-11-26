using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Tickets.Create;

public sealed record CreateTicketResponse(
    TicketData TicketData);
