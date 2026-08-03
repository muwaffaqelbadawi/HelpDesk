using HelpDesk.src.Features.Roles.GetCurrent;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class RolesServicesExtension
{
    public static IServiceCollection AddRolesServices(
        this IServiceCollection services)
    {
        // Register GetCurrentRolesHandler as Scoped
        services.AddScoped<IQueryHandler<CurrentRolesResponse>, GetCurrentRolesHandler>();

        return services;
    }
}
