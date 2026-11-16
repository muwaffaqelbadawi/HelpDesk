using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Readers;

public sealed class DepartmentReader(AppDbContext dbContext) : IDepartmentReader
{
    public async Task<Guid?> GetUserDepartmentIdAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        // Scalar projection
        // Instead of fetching the entire department record

        return await dbContext.Departments
            .AsNoTracking()
            .Where(d => d.Employees.Any(e => e.UserId == userId))
            .Select(d => (Guid?)d.Id)
            .SingleOrDefaultAsync(cancellationToken);
    }
}
