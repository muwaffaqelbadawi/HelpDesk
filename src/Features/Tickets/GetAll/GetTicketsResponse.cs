using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Tickets.GetAll;

public sealed record GetTicketsResponse(
    TicketData TicketData);
