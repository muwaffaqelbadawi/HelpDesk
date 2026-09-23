using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Auth.Modules.GetCurrent;

public sealed class GetCurrentModulesHandler(
    IUserContext userContext,
    AppDbContext dbContext)
    : IQueryHandler<CurrentModulesResponse>
{
    public async Task<CurrentModulesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.GuidUserId;


        // move to roles reader
        var modules = await dbContext.UserRoles
            .Where(ur => ur.UserId == userId)
            .SelectMany(ur => ur.Role.RolePermissionModules)
            .Select(rpm => rpm.Module.Name)
            .Distinct()
            .ToListAsync(cancellationToken);

        return new CurrentModulesResponse(modules);
    }
}
