using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.Authorization;

public sealed class PermissionService : IPermissionService
{
    public readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly AppDbContext _dbContext;

    public PermissionService(
        IUserContext userContext,
        IUserProvider userProvider,
        AppDbContext dbContext)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _dbContext = dbContext;
    }

    public async Task<IReadOnlyCollection<string>> GetUserPermissionsAsync(
        CancellationToken cancellationToken)
    {
        //self - service change
        var userId = _userContext.UserId;

        // Current user
        var user = await _userProvider.GetUserAsync(userId)
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
