using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Queries;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Tickets.GetAll;

public sealed class GetTicketsHandler(
    ITicketReader ticketReader)
        : IQueryHandler<GetTicketsQuery, PagedResult<TicketData>>
{
    public async Task<PagedResult<TicketData>> HandleAsync(
        GetTicketsQuery query,
        CancellationToken cancellationToken)
    {
        return await ticketReader.GetAllAsync(query, cancellationToken);
    }
}
