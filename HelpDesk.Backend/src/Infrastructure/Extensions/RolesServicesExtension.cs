using HelpDesk.src.Features.Roles.Assign;
using HelpDesk.src.Features.Roles.Delete;
using HelpDesk.src.Features.Roles.GetAll;
using HelpDesk.src.Features.Roles.GetById;
using HelpDesk.src.Features.Roles.GetCurrent;
using HelpDesk.src.Features.Roles.Update;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class RolesServicesExtension
{
    public static IServiceCollection AddRolesServices(
        this IServiceCollection services)
    {
        // Admin
        // GetAll (Admin) - Register GetRolesHandler as Scoped
        services.AddScoped<IQueryHandler<RolesResponse>, GetRolesHandler>();

        // GetById (Admin) - Register GetRoleByIdHandler as Scoped
        services.AddScoped<IQueryHandler<GetByIdRoleQuery, GetByIdRoleResponse>, GetRoleByIdHandler>();

        // Assign (Admin) - Register AssignRoleHandler (Admin) as scoped service
        services.AddScoped<ICommandHandler<AssignRoleCommand, AssignRoleResponse>, AssignRoleHandler>();

        // Update (Admin) - Register UpdateRoleHandler (Admin) as scoped service
        services.AddScoped<ICommandHandler<UpdateRoleCommand, UpdateRoleResponse>, UpdateRoleHandler>();

        // Delete (Admin) - DeleteRoleHandler
        services.AddScoped<ICommandHandler<DeleteRoleCommand>, DeleteRoleHandler>();


        // Regular user
        // GetCurrent (Regular user) - Register GetCurrentRolesHandler as Scoped
        services.AddScoped<IQueryHandler<CurrentRolesResponse>, GetCurrentRolesHandler>();


        return services;
    }
}
