using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Permissions.GetCurrent;

public sealed class GetCurrentPermissionsHandler
    : IQueryHandler<CurrentPermissionsResponse>
{
    private readonly IUserProvider _userProvider;
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly ILogger<GetCurrentPermissionsHandler> _logger;

    public GetCurrentPermissionsHandler(
        IUserProvider userProvider,
        IUserContext userContext,
        AppDbContext dbContext,
        ILogger<GetCurrentPermissionsHandler> logger)
    {
        _userProvider = userProvider;
        _userContext = userContext;
        _dbContext = dbContext;
        _logger = logger;
    }

    public async Task<CurrentPermissionsResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        // Self-service

        var userId = _userContext.GuidUserId;

        var permissions = await _dbContext.UserRoles
            .Where(ur => ur.UserId == userId)
            .SelectMany(ur => ur.Role.RolePermissionModules)
            .Select(rpm => rpm.Permission.Name)
            .Distinct()
            .ToListAsync(cancellationToken);

        return new CurrentPermissionsResponse(
            Permissions: permissions);
    }
}
