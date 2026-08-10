using HelpDesk.src.Features.Permissions.GetCurrent;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class PermissionsServicesExtension
{
    public static IServiceCollection AddPermissionsServices(
        this IServiceCollection services)
    {
        // Register GetCurrentPermissionsHandler as Scoped
        services.AddScoped<IQueryHandler<CurrentPermissionsResponse>, GetCurrentPermissionsHandler>();

        return services;
    }
}
