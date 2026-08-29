using Microsoft.AspNetCore.Authorization;
using HelpDesk.src.Infrastructure.Services.Authorization;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

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
