using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Users.GetAll;

public sealed class GetUsersHandler :
    IQueryHandler<PagedQuery, PagedResult<GetUsersResponse>>
{
    private readonly AppDbContext _dbContext;

    public GetUsersHandler(AppDbContext context)
    {
        _dbContext = context;
    }

    public async Task<PagedResult<GetUsersResponse>> HandleAsync(
        PagedQuery query,
        CancellationToken cancellationToken)
    {
        var queryable = _dbContext.Users.AsQueryable();

        var totalCount = await queryable.CountAsync(cancellationToken);

        var items = await queryable
            .OrderByDescending(u => u.CreatedAt)
            .Skip((query.PageNumber - 1) * query.PageSize)
            .Take(query.PageSize)
            .Select(u => new
            {
                u.Id,
                u.UserName,
                u.Email,
                FullArName = u.Employee != null ? u.Employee.FullArName : null,
                FullEnName = u.Employee != null ? u.Employee.FullEnName : null,
                RowVersion = u.Employee != null ? u.Employee.RowVersion : null
            })
            .ToListAsync(cancellationToken);

        var users = items.Select(u => new GetUsersResponse(
            new UserData(
                UserId: u.Id,
                UserName: u.UserName!,
                Email: u.Email!,
                FullEnName: u.FullEnName,
                FullArName: u.FullArName,
                EmployeeRowVersion: u.RowVersion)))
            .ToList();

        var totalPages = TotalPages.Calculate(totalCount, query.PageSize);

        return new PagedResult<GetUsersResponse>(
            Items: users,
            PageNumber: query.PageNumber,
            PageSize: query.PageSize,
            TotalCount: totalCount,
            TotalPages: totalPages);
    }
}
