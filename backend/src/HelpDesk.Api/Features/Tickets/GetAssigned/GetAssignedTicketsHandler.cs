using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Tickets.GetAssigned;

public sealed class GetAssignedTicketsHandler(
    IUserContext userContext,
    ITicketReader ticketReader)
        : IQueryHandler<AssignedTicketsResponse>
{
    public async Task<AssignedTicketsResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var assignedTickets = await ticketReader.GetAssignedAsync(
            userId: userContext.GuidUserId,
            cancellationToken: cancellationToken);

        return new AssignedTicketsResponse(assignedTickets);
    }
}
