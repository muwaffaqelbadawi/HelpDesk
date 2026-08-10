using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Projections;

public static class EmployeeQueries
{
    public static IQueryable<EmployeeData> SelectEmployeeData(
        this IQueryable<Employee> query)
    {
        return query.Select(e => new EmployeeData
        {
            EmployeeId = e.Id,
            EmployeeNumber = e.Number,
            FullEnName = e.FullEnName,
            FullArName = e.FullArName,
            RowVersion = e.RowVersion
        });
    }
}
