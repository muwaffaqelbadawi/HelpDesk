using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Projections;
using HelpDesk.src.Shared.QueryParameters;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Readers;

public sealed class UserReader(AppDbContext dbContext) : IUserReader
{
    public async Task<PagedResult<UserAccountData>> GetAllAsync(
        GetUsersParameters query,
        CancellationToken cancellationToken = default)
    {
        var queryable = dbContext.Users
            .AsNoTracking()
            .AsQueryable();

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

    public async Task<IReadOnlyList<UserAccountData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken = default)
    {
        var query = dbContext.Users
            .AsNoTracking();

        if (!string.IsNullOrWhiteSpace(search))
        {
            query = query.Where(u =>
                (u.UserName != null && u.UserName.Contains(search)) ||
                (u.Email != null && u.Email.Contains(search)) ||
                (u.Employee != null && (
                    u.Employee.Number.Contains(search) ||
                    u.Employee.FullEnName.Contains(search) ||
                    (u.Employee.FullArName != null &&
                     u.Employee.FullArName.Contains(search)))));
        }

        return await query
            .SelectUserAccount()
            .Skip(offset)
            .Take(pageSize)
            .ToListAsync(cancellationToken);
    }

    public async Task<UserAccountData> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == userId)
            .SelectUserAccount()
            .SingleAsync(cancellationToken);
    }

    public async Task<UserAccountRowVersionData> GetNewRowAsync(
        Guid userId,
        CancellationToken cancellationToken = default)
    {
        return await dbContext.Users
            .Where(u => u.Id == userId)
            .Select(u => new UserAccountRowVersionData
            {
                UserRowVersion = u.RowVersion,
                EmployeeRowVersion = u.Employee!.RowVersion
            })
            .SingleAsync(cancellationToken);
    }

    public async Task<bool> IsEmployee(
        Guid userId,
        CancellationToken cancellationToken = default)
    {
        return await dbContext.Users
            .AnyAsync(
                u => u.Id == userId && u.Employee != null,
                cancellationToken);
    }
}
