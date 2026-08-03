using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Employees.GetAll;

public sealed class GetEmployeesHandler :
    IQueryHandler<PagedQuery, PagedResult<GetEmployeesResponse>>
{
    private readonly AppDbContext _dbContext;
    private readonly ILogger<GetEmployeesHandler> _logger;

    public GetEmployeesHandler(
        AppDbContext context,
        ILogger<GetEmployeesHandler> logger)
    {
        _dbContext = context;
        _logger = logger;
    }

    public async Task<PagedResult<GetEmployeesResponse>> HandleAsync(
        PagedQuery query,
        CancellationToken cancellationToken)
    {
        var queryable = _dbContext.Employees.AsQueryable();

        var totalCount = await queryable.CountAsync(cancellationToken);

        var items = await queryable
            .OrderByDescending(e => e.CreatedAt)
            .Skip((query.PageNumber - 1) * query.PageSize)
            .Take(query.PageSize)
            .Select(e => new
            {
                e.Id,
                e.FullEnName,
                e.FullArName,
                e.Number,
                e.RowVersion
            })
            .ToListAsync(cancellationToken);

        var employees = items.Select(e => new GetEmployeesResponse(
            new EmployeeData(
                EmployeeId: e.Id,
                FullEnName: e.FullEnName,
                FullArName: e.FullArName,
                EmployeeNumber: e.Number,
                RowVersion: e.RowVersion)))
            .ToList();

        var totalPages = TotalPages.Calculate(totalCount, query.PageSize);

        return new PagedResult<GetEmployeesResponse>(
            Items: employees,
            PageNumber: query.PageNumber,
            PageSize: query.PageSize,
            TotalCount: totalCount,
            TotalPages: totalPages);
    }
}
