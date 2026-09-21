using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Projections;
using HelpDesk.src.Shared.Queries;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Readers;

public sealed class TicketReader(AppDbContext dbContext)
    : ITicketReader
{
    // Pagination logic
    public async Task<PagedResult<TicketData>> GetAllAsync(
        GetTicketsQuery query,
        CancellationToken cancellationToken = default)
    {
        var queryable = dbContext.Tickets.AsQueryable();

        var totalCount = await queryable.CountAsync(cancellationToken);

        var totalPages = TotalPages.Calculate(totalCount, query.PageSize);

        var tickets = await queryable
            .AsNoTracking()
            .OrderByDescending(t => t.CreatedAt)
            .Skip(query.Offset)
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

    // Search logic
    public async Task<IReadOnlyCollection<TicketData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken = default)
    {
        var query = dbContext.Tickets
            .AsNoTracking();

        if (!string.IsNullOrWhiteSpace(search))
        {
            query = query.Where(t =>
                (t.Title != null
                && t.Title.Contains(search)));
        }

        return await query
            .SelectTicketData()
            .Skip(offset)
            .Take(pageSize)
            .ToListAsync(cancellationToken);
    }

    // Select data logic
    public async Task<TicketData> GetByIdAsync(
        Guid ticketId,
        CancellationToken cancellationToken = default)
    {
        return await dbContext.Tickets
            .AsNoTracking()
            .Where(t => t.Id == ticketId)
            .SelectTicketData()
            .SingleAsync(cancellationToken);
    }

    public async Task<IReadOnlyCollection<TicketData>> GetOwnedTicketsAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Tickets
            .AsNoTracking()
            .Where(t => t.CreatedById == userId)
            .OrderByDescending(t => t.CreatedAt)
            .SelectTicketData()
            .ToListAsync(cancellationToken);
    }
}
