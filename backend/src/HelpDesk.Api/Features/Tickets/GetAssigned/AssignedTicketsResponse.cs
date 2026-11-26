using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Tickets.GetAssigned;

public sealed record AssignedTicketsResponse(
    IReadOnlyCollection<TicketData> TicketData);
