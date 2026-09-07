using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace HelpDesk.src.Infrastructure.Services.Permissions;

public sealed class PermissionHandler(IPermissionService permissionService)
    : AuthorizationHandler<PermissionRequirement>
{
    protected override async Task HandleRequirementAsync(
        AuthorizationHandlerContext context,
        PermissionRequirement requirement)
    {
        var permissions = await permissionService
            .GetUserPermissionsAsync(CancellationToken.None);

        if (permissions.Contains(requirement.Permission))
        {
            context.Succeed(requirement);
        }
    }
}
