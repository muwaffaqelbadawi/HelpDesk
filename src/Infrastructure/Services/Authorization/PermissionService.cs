using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.Authorization;

public sealed class PermissionService : IPermissionService
{
    private readonly IUserProvider _userProvider;
    private readonly AppDbContext _dbContext;

    public PermissionService(
        IUserProvider userProvider,
        AppDbContext dbContext)
    {
        _userProvider = userProvider;
        _dbContext = dbContext;
    }

    public async Task<IReadOnlyCollection<string>> GetUserPermissionsAsync(
        CancellationToken cancellationToken)
    {
        // Current user
        var user = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new UnauthorizedAccessException("Authenticated user not found.");

        // Get user roles
        var roles = await _userProvider.GetRoleNamesAsync(user);

        // Build permissions
        var permissions = await _dbContext.RolePermissionModules
            .AsNoTracking()
            .Where(x => roles.Contains(x.Role.Name))
            .Select(x => $"{x.Module.Name}.{x.Permission.Name}")
            .Distinct()
            .ToListAsync(cancellationToken);

        return permissions;
    }
}
