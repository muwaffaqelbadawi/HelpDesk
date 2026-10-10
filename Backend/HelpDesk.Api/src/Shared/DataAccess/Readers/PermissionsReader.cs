using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Readers;

public sealed class PermissionsReader(AppDbContext dbContext) : IPermissionsReader
{
    public async Task<IReadOnlyCollection<string>> GetPermissionsByRolesAsync(
        IReadOnlyCollection<string> roles,
        CancellationToken cancellationToken)
    {
        return await dbContext.RolePermissionModules
            .AsNoTracking()
            .Where(x => roles.Contains(x.Role.Name))
            .Select(x => $"{x.Module.Name}.{x.Permission.Name}")
            .Distinct()
            .ToListAsync(cancellationToken);
    }
}
