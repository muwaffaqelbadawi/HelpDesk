using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Projections;
using HelpDesk.src.Shared.Queries;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.Responses.Readers;

public sealed class UserReader : IUserReader
{
    private readonly AppDbContext _dbContext;

    public UserReader(
        AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    // Pagination logic
    public async Task<PagedResult<UserAccountData>> GetAllAsync(
        GetUsersQuery query,
        CancellationToken cancellationToken = default)
    {
        var queryable = _dbContext.Users.AsQueryable();

        var totalCount = await queryable.CountAsync(cancellationToken);

        var users = await queryable
            .OrderByDescending(u => u.CreatedAt)
            .Skip(query.Offset)
            .Take(query.PageSize)
            .SelectUserAccount()
            .ToListAsync(cancellationToken);

        var totalPages = TotalPages.Calculate(totalCount, query.PageSize);

        return new PagedResult<UserAccountData>(
            Items: users,
            PageNumber: query.PageNumber,
            PageSize: query.PageSize,
            TotalCount: totalCount,
            TotalPages: totalPages);
    }

    // Search logic
    public async Task<IReadOnlyList<UserAccountData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken = default)
    {
        var query = _dbContext.Users
            .AsNoTracking();

        if (!string.IsNullOrWhiteSpace(search))
        {
            query = query.Where(u =>
                (u.UserName != null && u.UserName.Contains(search)) ||
                (u.Email != null && u.Email.Contains(search)) ||
                (u.Employee != null && (
                    u.Employee.Number.Contains(search) ||
                    u.Employee.FullEnName.Contains(search) ||
                    u.Employee.FullArName.Contains(search))));
        }

        return await query
            .SelectUserAccount()
            .Skip(offset)
            .Take(pageSize)
            .ToListAsync(cancellationToken);
    }

    // Select data logic
    public async Task<UserAccountData> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        // User reader
        return await _dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == userId)
            .SelectUserAccount()
            .SingleAsync(cancellationToken);
    }
}
