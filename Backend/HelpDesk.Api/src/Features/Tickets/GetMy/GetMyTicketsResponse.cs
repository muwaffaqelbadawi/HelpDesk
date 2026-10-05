using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Tickets.GetMy;

public sealed record GetMyTicketsResponse(
    IReadOnlyCollection<TicketData> TicketData);
