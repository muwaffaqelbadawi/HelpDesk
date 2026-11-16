using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;

namespace HelpDesk.src.Features.Tickets.GetAll;

public sealed class GetTicketsHandler(ITicketReader ticketReader)
    : IQueryHandler<QueryParameters, GetTicketsResponse>
{
    public async Task<GetTicketsResponse> HandleAsync(
        QueryParameters query,
        CancellationToken cancellationToken)
    {
        var pagedResult = await ticketReader
            .GetAllAsync(query, cancellationToken);

        return new GetTicketsResponse(pagedResult);
    }
}
