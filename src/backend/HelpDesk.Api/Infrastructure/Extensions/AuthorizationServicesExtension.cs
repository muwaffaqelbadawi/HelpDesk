using HelpDesk.Infrastructure.Services.Permissions;
using HelpDesk.Shared.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace HelpDesk.Infrastructure.Extensions;

public static class AuthorizationServicesExtension
{
    public static WebApplicationBuilder AddAuthorization(
        this WebApplicationBuilder builder)
    {
        // Register the PermissionService as a scoped service
        builder.Services.AddScoped<IPermissionService, PermissionService>();

        // Register the PermissionHandler as a Scoped service
        builder.Services.AddScoped<IAuthorizationHandler, PermissionHandler>();

        // Register the PermissionPolicyProvider as a Singleton service
        builder.Services.AddSingleton<IAuthorizationPolicyProvider, PermissionPolicyProvider>();

        return builder;
    }
}
