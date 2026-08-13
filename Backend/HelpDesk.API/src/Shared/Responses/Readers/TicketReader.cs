using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Projections;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.Responses.Readers;

public sealed class TicketReader : ITicketReader
{
    private readonly AppDbContext _dbContext;

    public TicketReader(
        AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<PagedResult<TicketData>> GetAllAsync(
        PagedQuery query,
        CancellationToken cancellationToken)
    {
        var queryable = _dbContext.Tickets.AsQueryable();

        var totalCount = await queryable.CountAsync(cancellationToken);

        var totalPages = TotalPages.Calculate(totalCount, query.PageSize);

        var tickets = await queryable
            .OrderByDescending(t => t.CreatedAt)
            .Skip((query.PageNumber - 1) * query.PageSize)
            .Take(query.PageSize)
            .SelectTicketData()
            .ToListAsync(cancellationToken);

        return new PagedResult<TicketData>(
            Items: tickets,
            PageNumber: query.PageNumber,
            PageSize: query.PageSize,
            TotalCount: totalCount,
            TotalPages: totalPages);
    }

    public async Task<TicketData> GetByIdAsync(
        Guid ticketId,
        CancellationToken cancellationToken)
    {
        return await _dbContext.Tickets
            .AsNoTracking()
            .Where(t => t.Id == ticketId)
            .SelectTicketData()
            .SingleAsync(cancellationToken);
    }
}
