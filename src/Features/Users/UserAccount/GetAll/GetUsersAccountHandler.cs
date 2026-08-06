using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Projections;
using HelpDesk.src.Shared.Responses;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Users.UserAccount.GetAll;

public sealed class GetUsersAccountHandler :
    IQueryHandler<PagedQuery, PagedResult<UserAccountData>>
{
    private readonly AppDbContext _dbContext;

    public GetUsersAccountHandler(AppDbContext context)
    {
        _dbContext = context;
    }

    public async Task<PagedResult<UserAccountData>> HandleAsync(
        PagedQuery query,
        CancellationToken cancellationToken)
    {
        var queryable = _dbContext.Users.AsQueryable();

        var totalCount = await queryable.CountAsync(cancellationToken);

        var users = await queryable
            .OrderByDescending(u => u.CreatedAt)
            .Skip((query.PageNumber - 1) * query.PageSize)
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
}
