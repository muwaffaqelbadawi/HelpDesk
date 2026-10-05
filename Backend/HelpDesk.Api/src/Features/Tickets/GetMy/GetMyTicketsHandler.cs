using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.GetMy;

public sealed class GetMyTicketsHandler(
    IUserContext userContext,
    ITicketReader ticketReader)
        : IQueryHandler<GetMyTicketsResponse>
{
    public async Task<GetMyTicketsResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var tickets = await ticketReader.GetMyTicketsAsync(
            userId: userContext.GuidUserId,
            cancellationToken: cancellationToken);

        return new GetMyTicketsResponse(tickets);
    }
}
