namespace HelpDesk.src.Infrastructure.Extensions;

public static class DashboardServicesExtension
{
    public static IServiceCollection AddDashboardServices(
        this IServiceCollection services)
    {
        // Register DashboardHandler handler as a scoped service
        //services.AddScoped<IQueryHandler<PagedQuery, PagedResult<DashboardResponse>>, DashboardHandler>();

        return services;
    }
}
