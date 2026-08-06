using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Permissions.GetCurrent;

public sealed class GetCurrentPermissionsHandler
    : IQueryHandler<CurrentPermissionsResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;

    public GetCurrentPermissionsHandler(
        IUserContext userContext,
        AppDbContext dbContext)
    {
        _userContext = userContext;
        _dbContext = dbContext;
    }

    public async Task<CurrentPermissionsResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = _userContext.GuidUserId;

        var permissions = await _dbContext.UserRoles
            .Where(ur => ur.UserId == userId)
            .SelectMany(ur => ur.Role.RolePermissionModules)
            .Select(rpm => rpm.Permission.Name)
            .Distinct()
            .ToListAsync(cancellationToken);

        return new CurrentPermissionsResponse(permissions);
    }
}
