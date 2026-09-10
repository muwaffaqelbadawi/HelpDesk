using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DomainRules.Users.CreateUserAccount;

public sealed class DepartmentRules(AppDbContext dbContext)
    : IDepartmentRules
{
    public async Task<bool> IsActiveAsync(
        Guid departmentId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Departments
            .AnyAsync(x => x.Id == departmentId && x.IsActive,
                cancellationToken);
    }
}
