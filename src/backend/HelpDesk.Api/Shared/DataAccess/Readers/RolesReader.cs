using HelpDesk.Infrastructure.Database.DbContext;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.Shared.DataAccess.Readers;

public sealed class RolesReader(AppDbContext dbContext) : IRolesReader
{
    public async Task<string?> GetByIdRoleAsync(
        Guid roleId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Roles
            .AsNoTracking()
            .Where(r => r.Id == roleId)
            .Select(r => r.Name)
            .FirstOrDefaultAsync(cancellationToken);
    }

    public async Task<IReadOnlyCollection<string>> GetUserRoleAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.UserRoles
            .AsNoTracking()
            .Where(ur => ur.UserId == userId)
            .Select(ur => ur.Role.Name ?? string.Empty)
            .ToListAsync(cancellationToken);
    }

    public async Task<ApplicationUserRole?> GetAssignedRoleAsync(
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
