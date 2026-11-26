using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Tickets.GetMy;

public sealed record GetMyTicketsResponse(
    IReadOnlyCollection<TicketData> TicketData);
