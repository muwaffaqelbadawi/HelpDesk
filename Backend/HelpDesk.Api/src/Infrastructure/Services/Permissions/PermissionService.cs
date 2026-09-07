using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.Permissions;

public sealed class PermissionService(
    IUserContext userContext,
    IUserProvider userProvider,
    AppDbContext dbContext)
        : IPermissionService
{
    public async Task<IReadOnlyCollection<string>> GetUserPermissionsAsync(
        CancellationToken cancellationToken)
    {
        //self - service change
        var userId = userContext.UserId;

        // Current user
        var user = await userProvider.GetUserAsync(userId)
            ?? throw new UnauthorizedAccessException("Authenticated user not found.");

        // Get user roles
        var roles = await userProvider.GetRoleNamesAsync(user);

        // Build permissions
        var permissions = await dbContext.RolePermissionModules
            .AsNoTracking()
            .Where(x => roles.Contains(x.Role.Name))
            .Select(x => $"{x.Module.Name}.{x.Permission.Name}")
            .Distinct()
            .ToListAsync(cancellationToken);

        return permissions;
    }
}
