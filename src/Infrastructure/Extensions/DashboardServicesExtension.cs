using HelpDesk.src.Features.Dashboard;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class DashboardServicesExtension
{
    public static IServiceCollection AddDashboardServices(
        this IServiceCollection services)
    {
        // Create (POST)
        services.AddScoped<IQueryHandler<PagedQuery, PagedResult<DashboardResponse>>, DashboardHandler>();

        return services;
    }
}
