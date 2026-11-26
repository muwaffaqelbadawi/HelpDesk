using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Tickets.GetMy;

public sealed class GetMyTicketsHandler(
    IUserContext userContext,
    ITicketReader ticketReader)
        : IQueryHandler<GetMyTicketsResponse>
{
    public async Task<GetMyTicketsResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var tickets = await ticketReader
            .GetMyTicketsAsync(
                userContext.GuidUserId,
                cancellationToken);

        return new GetMyTicketsResponse(tickets);
    }
}
