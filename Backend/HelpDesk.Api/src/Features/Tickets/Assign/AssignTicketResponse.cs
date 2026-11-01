using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Tickets.Assign;

public sealed record AssignTicketResponse(
    TicketData TicketData);
