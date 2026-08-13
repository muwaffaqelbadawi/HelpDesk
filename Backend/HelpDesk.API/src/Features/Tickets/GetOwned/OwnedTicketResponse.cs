using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Tickets.GetOwned;

public sealed record OwnedTicketResponse(
    IReadOnlyCollection<TicketData> TicketData);
