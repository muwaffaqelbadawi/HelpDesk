using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Tickets.GetMy;

public sealed record GetMyTicketsResponse(
    IReadOnlyCollection<TicketData> TicketData);
