using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Projections;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Employees.GetAll;

public sealed class GetEmployeesHandler :
    IQueryHandler<PagedQuery, PagedResult<EmployeeData>>
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

    public async Task<PagedResult<EmployeeData>> HandleAsync(
        PagedQuery query,
        CancellationToken cancellationToken)
    {
        var queryable = _dbContext.Employees.AsQueryable();

        var totalCount = await queryable.CountAsync(cancellationToken);

        var employees = await queryable
            .OrderByDescending(e => e.CreatedAt)
            .Skip((query.PageNumber - 1) * query.PageSize)
            .Take(query.PageSize)
            .SelectEmployeeData()
            .ToListAsync(cancellationToken);

        var totalPages = TotalPages.Calculate(totalCount, query.PageSize);

        return new PagedResult<EmployeeData>(
            Items: employees,
            PageNumber: query.PageNumber,
            PageSize: query.PageSize,
            TotalCount: totalCount,
            TotalPages: totalPages);
    }
}
