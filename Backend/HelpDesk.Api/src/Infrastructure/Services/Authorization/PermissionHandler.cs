using Microsoft.AspNetCore.Authorization;
using HelpDesk.src.Infrastructure.HttpContexts;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Authorization;

public sealed class PermissionHandler : AuthorizationHandler<PermissionRequirement>
{
    private readonly IPermissionService _permissionService;
    private readonly ILogger<UserContext> _logger;

    public PermissionHandler(
        IPermissionService permissionService,
        ILogger<UserContext> logger)
    {
        _permissionService = permissionService;
        _logger = logger;
    }

    protected override async Task HandleRequirementAsync(
        AuthorizationHandlerContext context,
        PermissionRequirement requirement)
    {
        // Build user permissions
        var permissions = await _permissionService
            .GetUserPermissionsAsync(CancellationToken.None);

        if (permissions.Contains(requirement.Permission))
        {
            context.Succeed(requirement);
        }
    }
}
