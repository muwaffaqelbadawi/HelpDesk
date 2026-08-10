using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Modules.GetCurrent;

public sealed class GetCurrentModulesHandler
    : IQueryHandler<CurrentModulesResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;

    public GetCurrentModulesHandler(
        IUserContext userContext,
        AppDbContext dbContext)
    {
        _userContext = userContext;
        _dbContext = dbContext;
    }

    public async Task<CurrentModulesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = _userContext.GuidUserId;

        var modules = await _dbContext.UserRoles
            .Where(ur => ur.UserId == userId)
            .SelectMany(ur => ur.Role.RolePermissionModules)
            .Select(rpm => rpm.Module.Name)
            .Distinct()
            .ToListAsync(cancellationToken);

        return new CurrentModulesResponse(modules);
    }
}
