using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.QueryParameters;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Tickets.GetAll;

public sealed class GetTicketsHandler(ITicketReader ticketReader)
    : IQueryHandler<GetTicketsParameters, PagedResult<TicketData>>
{
    public async Task<PagedResult<TicketData>> HandleAsync(
        GetTicketsParameters query,
        CancellationToken cancellationToken)
    {
        return await ticketReader.GetAllAsync(query, cancellationToken);
    }
}
