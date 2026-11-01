using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;

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
