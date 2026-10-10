using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Readers;

public sealed class RolesReader(AppDbContext dbContext) : IRolesReader
{
    public async Task<IReadOnlyCollection<string>> GetUserRolesAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.UserRoles
            .AsNoTracking()
            .Where(ur => ur.UserId == userId)
            .Select(ur => ur.Role.Name ?? string.Empty)
            .ToListAsync(cancellationToken);
    }

    public async Task<ApplicationUserRole?> GetAssignedRolesAsync(
        Guid userId,
        Guid roleId,
        CancellationToken cancellationToken)
    {
        return await dbContext.UserRoles
            .AsNoTracking()
            .FirstOrDefaultAsync(
            x => x.UserId == userId &&
                 x.RoleId == roleId,
                 cancellationToken);
    }
}
