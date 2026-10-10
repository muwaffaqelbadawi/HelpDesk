using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Repositories;

public sealed class RolesRepository(AppDbContext dbContext) : IRolesRepository
{
    public async Task AddAsync(
        ApplicationUserRole newRole,
        CancellationToken cancellationToken)
    {
        dbContext.UserRoles.Add(newRole);
        await dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task<int> UpdateAsync(
        Guid currentUserId,
        Guid userId,
        Guid roleId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        return await dbContext.UserRoles
            .Where(ur => ur.UserId == userId
                && ur.RoleId == roleId)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(ur => ur.RemovedAt, (DateTimeOffset?)null)
                .SetProperty(ur => ur.RemovedById, (Guid?)null)
                .SetProperty(ur => ur.AssignedAt, now)
                .SetProperty(ur => ur.AssignedById, currentUserId),
            cancellationToken);
    }

    public async Task<int> DeleteAsync(
        Guid currentUserId,
        Guid userId,
        Guid roleId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        return await dbContext.UserRoles
            .Where(ur => ur.UserId == userId
                 && ur.RoleId == roleId
                 && ur.RemovedAt == null)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(ur => ur.RemovedAt, now)
                .SetProperty(ur => ur.RemovedById, currentUserId),
            cancellationToken);
    }
}
