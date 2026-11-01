using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Tickets.GetAssigned;

public sealed record AssignedTicketsResponse(
    IReadOnlyCollection<TicketData> TicketData);
