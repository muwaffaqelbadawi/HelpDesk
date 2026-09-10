using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.GetOwned;

public sealed class GetOwnedTicketsHandler(
    ITicketReader ticketReader,
    IUserContext userContext)
        : IQueryHandler<OwnedTicketResponse>
{
    public async Task<OwnedTicketResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        // Self-service
        var userId = userContext.GuidUserId;

        var tickets = await ticketReader.GetOwnedTicketsAsync(
            userId,
            cancellationToken);

        return new OwnedTicketResponse(tickets);
    }
}
