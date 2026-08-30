namespace HelpDesk.src.Infrastructure.Extensions;

public static class ModulesServicesExtension
{
    public static IServiceCollection AddModulesServices(
    this IServiceCollection services)
    {
        // Register GetCurrentModulesHandler as Scoped
        //services.AddScoped<IQueryHandler<CurrentModulesResponse>, GetCurrentModulesHandler>();

        return services;
    }
}
