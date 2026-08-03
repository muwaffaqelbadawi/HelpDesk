using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Modules.GetCurrent;

public sealed class GetCurrentModulesHandler
    : IQueryHandler<CurrentModulesResponse>
{
    private readonly IUserProvider _userProvider;
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly ILogger<GetCurrentModulesHandler> _logger;

    public GetCurrentModulesHandler(
        IUserProvider userProvider,
        IUserContext userContext,
        AppDbContext dbContext,
        ILogger<GetCurrentModulesHandler> logger)
    {
        _userProvider = userProvider;
        _userContext = userContext;
        _dbContext = dbContext;
        _logger = logger;
    }

    public async Task<CurrentModulesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        // Self-service

        var userId = _userContext.GuidUserId;

        // No need for "ur.RemovedAt == null"
        // it's already in the global filter

        var modules = await _dbContext.UserRoles
            .Where(ur => ur.UserId == userId)
            .SelectMany(ur => ur.Role.RolePermissionModules)
            .Select(rpm => rpm.Module.Name)
            .Distinct()
            .ToListAsync(cancellationToken);

        return new CurrentModulesResponse(
            Modules: modules);
    }
}
