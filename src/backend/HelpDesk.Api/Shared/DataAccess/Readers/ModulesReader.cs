using HelpDesk.Infrastructure.Database.DbContext;
using HelpDesk.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.Shared.DataAccess.Readers;

public sealed class ModulesReader(AppDbContext dbContext) : IModulesReader
{
    public async Task<IReadOnlyCollection<string>> GetUserModulesAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.UserRoles
            .AsNoTracking()
            .Where(ur => ur.UserId == userId)
            .SelectMany(ur => ur.Role.RolePermissionModules)
            .Select(rpm => rpm.Module.Name)
            .Distinct()
            .ToListAsync(cancellationToken);
    }
}
