using HelpDesk.src.Features.Employees.Create;
using HelpDesk.src.Infrastructure.Database.Data.Business.BusinessSchemas;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class EmployeeServicesExtension
{
    public static IServiceCollection AddEmployeeServices(
        this IServiceCollection services)
    {
        // Create (POST)
        services.AddScoped<ICommandHandler<CreateEmployeeCommand, CreateEmployeeResponse>, CreateEmployeeHandler>();

        // Numbering
        services.AddScoped<INumberingService, NumberingService>();

        return services;
    }
}
