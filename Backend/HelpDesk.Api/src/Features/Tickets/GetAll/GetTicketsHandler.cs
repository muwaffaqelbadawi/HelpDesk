using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Queries;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Tickets.GetAll;

public sealed class GetTicketsHandler
    : IQueryHandler<GetTicketsQuery, PagedResult<TicketData>>
{
    private readonly ITicketReader _ticketReader;

    public GetTicketsHandler(
        ITicketReader ticketRepository)
    {
        _ticketReader = ticketRepository;
    }

    public async Task<PagedResult<TicketData>> HandleAsync(
        GetTicketsQuery query,
        CancellationToken cancellationToken)
    {
        return await _ticketReader.GetAllAsync(query, cancellationToken);
    }
}
