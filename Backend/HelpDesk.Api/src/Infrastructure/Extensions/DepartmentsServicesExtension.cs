using HelpDesk.src.Shared.DataAccess.Readers;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class DepartmentsServicesExtension
{
    public static IServiceCollection AddDepartmentsServices(
        this IServiceCollection services)
    {
        // Register DepartmentReader as scoped service
        services.AddScoped<IDepartmentReader, DepartmentReader>();

        return services;
    }
}
