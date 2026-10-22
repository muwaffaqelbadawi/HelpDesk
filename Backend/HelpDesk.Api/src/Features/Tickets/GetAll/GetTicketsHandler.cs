using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Tickets.GetAll;

public sealed class GetTicketsHandler(ITicketReader ticketReader)
    : IQueryHandler<QueryParameters, PagedResult<TicketData>>
{
    public async Task<PagedResult<TicketData>> HandleAsync(
        QueryParameters query,
        CancellationToken cancellationToken)
    {
        return await ticketReader.GetAllAsync(query, cancellationToken);
    }
}
