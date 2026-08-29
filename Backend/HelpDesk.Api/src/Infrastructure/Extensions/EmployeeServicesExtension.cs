using HelpDesk.src.Features.Employees.Create;
using HelpDesk.src.Features.Employees.Delete;
using HelpDesk.src.Features.Employees.GetAll;
using HelpDesk.src.Features.Employees.GetById;
using HelpDesk.src.Features.Employees.Update;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class EmployeeServicesExtension
{
    public static IServiceCollection AddEmployeeServices(
        this IServiceCollection services)
    {
        // GetAll
        services.AddScoped<IQueryHandler<PagedQuery, PagedResult<EmployeeData>>, GetEmployeesHandler>();

        // GetById
        services.AddScoped<IQueryHandler<GetByIdEmployeeQuery, GetByIdEmployeeResponse>, GetByIdEmployeeHandler>();

        // Create
        services.AddScoped<ICommandHandler<CreateEmployeeCommand, CreateEmployeeResponse>, CreateEmployeeHandler>();

        // Update
        services.AddScoped<ICommandHandler<UpdateEmployeeCommand, UpdateEmployeeResponse>, UpdateEmployeeHandler>();

        // Delete
        services.AddScoped<ICommandHandler<DeleteEmployeeCommand>, DeleteEmployeeHandler>();

        return services;
    }
}
