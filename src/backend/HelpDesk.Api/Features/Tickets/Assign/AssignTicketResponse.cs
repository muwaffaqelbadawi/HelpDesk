using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Tickets.Assign;

public sealed record AssignTicketResponse(
    TicketData TicketData);
