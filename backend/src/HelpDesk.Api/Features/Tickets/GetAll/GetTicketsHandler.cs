using HelpDesk.Shared.Interfaces;
using HelpDesk.Shared.Pagination;

namespace HelpDesk.Features.Tickets.GetAll;

public sealed class GetTicketsHandler(ITicketReader ticketReader)
    : IQueryHandler<QueryParameters, GetTicketsResponse>
{
    public async Task<GetTicketsResponse> HandleAsync(
        QueryParameters query,
        CancellationToken cancellationToken)
    {
        var pagedResult = await ticketReader
            .GetAllAsync(
                query,
                cancellationToken);

        return new GetTicketsResponse(pagedResult);
    }
}
