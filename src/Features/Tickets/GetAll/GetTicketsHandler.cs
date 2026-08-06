using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Projections;
using HelpDesk.src.Shared.Responses;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Tickets.GetAll;

public sealed class GetTicketsHandler :
    IQueryHandler<PagedQuery, PagedResult<TicketData>>
{
    private readonly AppDbContext _dbContext;

    public GetTicketsHandler(
        AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<PagedResult<TicketData>> HandleAsync(
        PagedQuery query,
        CancellationToken cancellationToken)
    {
        var queryable = _dbContext.Tickets.AsQueryable();

        var totalCount = await queryable.CountAsync(cancellationToken);

        var tickets = await queryable
            .OrderByDescending(t => t.CreatedAt)
            .Skip((query.PageNumber - 1) * query.PageSize)
            .Take(query.PageSize)
            .SelectTicketData()
            .ToListAsync(cancellationToken);

        var totalPages = TotalPages.Calculate(totalCount, query.PageSize);

        return new PagedResult<TicketData>(
            Items: tickets,
            PageNumber: query.PageNumber,
            PageSize: query.PageSize,
            TotalCount: totalCount,
            TotalPages: totalPages);
    }
}
