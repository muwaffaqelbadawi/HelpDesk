using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

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

    public Task<RolesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        // List all users with their roles

        // Admin-initiated


        throw new NotImplementedException();
    }
}
