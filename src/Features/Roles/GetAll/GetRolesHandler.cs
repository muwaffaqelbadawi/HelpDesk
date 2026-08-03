using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Roles.GetAll;

public sealed class GetRolesHandler :
    IQueryHandler<RolesResponse>
{
    private readonly RoleManager<ApplicationRole> _roleManager;

    public GetRolesHandler(
        RoleManager<ApplicationRole> roleManager)
    {
        _roleManager = roleManager;
    }

    public async Task<RolesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        // User already authenticated and authorized by the controller's [Authorize] policy
        // No need to call _userProvider.GetUserAsync

        var roles = await _roleManager.Roles
            .OrderBy(r => r.SortOrder)
            .Select(r => new RoleData(
                r.Id,
                r.Name!,
                r.Code,
                r.IsActive,
                r.SortOrder))
            .ToListAsync(cancellationToken);

        return new RolesResponse(
            Roles: roles);
    }
}
