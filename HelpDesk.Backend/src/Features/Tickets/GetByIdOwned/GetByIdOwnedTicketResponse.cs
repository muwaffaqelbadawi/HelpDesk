using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Tickets.GetByIdOwned;

public sealed record GetByIdOwnedTicketResponse(
    TicketData TicketData);
