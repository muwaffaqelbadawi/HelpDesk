using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.DataAccess.Projections;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Readers;

public sealed class UserReader(
    UserManager<ApplicationUser> userManager,
    AppDbContext dbContext)
        : IUserReader
{
    public Task<ApplicationUser?> GetUserAsync(string userId)
    {
        return userManager.FindByIdAsync(userId);
    }

    public async Task<ApplicationUser?> GetUserWithTimeZoneAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Include(u => u.TimeZone)
            .SingleOrDefaultAsync(
                u => u.Id == userId,
                cancellationToken);
    }

    public async Task<ApplicationUser?> GetUserWithPreferredLanguageAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Include(u => u.PreferredLanguage)
            .SingleOrDefaultAsync(
                u => u.Id == userId,
                cancellationToken);
    }

    public Task<ApplicationUser?> GetUserByEmailAsync(string email)
    {
        return userManager.FindByEmailAsync(email);
    }

    public async Task<PagedResult<UserAccountData>> GetAllAsync(
        QueryParameters query,
        CancellationToken cancellationToken)
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

        var totalPages = TotalPages.Calculate(
            totalCount,
            query.PageSize);

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
        CancellationToken cancellationToken)
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

    public async Task<UserAccountRowVersionData> GetNewRowVersionAsync(
        Guid userId,
        CancellationToken cancellationToken)
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
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .AnyAsync(
                u => u.Id == userId && u.Employee != null,
                cancellationToken);
    }

    public async Task<bool> IsTimeZoneExistAndActiveAsync(
        Guid timeZoneId,
        CancellationToken cancellationToken)
    {
        return await dbContext.TimeZones
        .AnyAsync(
            t => t.Id == timeZoneId && t.IsActive,
            cancellationToken);
    }

    public async Task<IReadOnlyCollection<string>> GetAllActiveTimeZonesAsync(
        CancellationToken cancellationToken)
    {
        return await dbContext.TimeZones
            .AsNoTracking()
            .Where(t => t.IsActive)
            .OrderBy(t => t.Name)
            .Select(t => t.Name)
            .ToListAsync(cancellationToken);
    }

    public async Task<IReadOnlyCollection<string>> GetAllActiveLanguagesAsync(
        CancellationToken cancellationToken)
    {
        return await dbContext.Languages
            .AsNoTracking()
            .Where(t => t.IsActive)
            .OrderBy(t => t.Name)
            .Select(t => t.Name)
            .ToListAsync(cancellationToken);

        throw new NotImplementedException();
    }

    public async Task<bool> IsLanguageExistAndActiveAsync(
        Guid languageId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Languages
        .AnyAsync(
            t => t.Id == languageId && t.IsActive,
            cancellationToken);
    }
}
