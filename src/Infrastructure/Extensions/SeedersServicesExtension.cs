using HelpDesk.src.Infrastructure.Services.Seeders.Lookup;
using HelpDesk.src.Infrastructure.Services.Seeders.Runner;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Branches;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Departments;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Modules;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Permissions;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.RolePermissionModules;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Roles;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketStatuses;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class SeedersServicesExtension
{
    public static WebApplicationBuilder AddSeeders(
        this WebApplicationBuilder builder)
    {
        // Auth.Roles
        builder.Services.AddScoped<IDataSeeder, RoleSeederService>();

        // Auth.Permissions
        builder.Services.AddScoped<IDataSeeder, PermissionSeederService>();

        // Auth.Modules
        builder.Services.AddScoped<IDataSeeder, ModuleSeederService>();

        // Auth.RolePermissionModules
        builder.Services.AddScoped<IDataSeeder, RolePermissionModulesSeederService>();

        // Auth.UserStatuses
        builder.Services.AddScoped<IDataSeeder, UserStatusSeederService>();

        // Business.Departments
        builder.Services.AddScoped<IDataSeeder, DepartmentSeederService>();

        // Business.Branches
        builder.Services.AddScoped<IDataSeeder, BranchSeederService>();

        // Business.TicketStatuses
        builder.Services.AddScoped<IDataSeeder, TicketStatusSeederService>();

        // Business.TicketPriorities
        builder.Services.AddScoped<IDataSeeder, TicketPrioritySeederService>();

        // Business.EmployeeStatuses
        builder.Services.AddScoped<IDataSeeder, EmployeeStatusSeederService>();

        // Runner
        builder.Services.AddScoped<ILookupSeederRunner, LookupSeederRunner>();


        // Register TicketLookupService as a scoped service
        builder.Services.AddScoped<ITicketLookupService, TicketLookupService>();

        // Register UserLookupService as a scoped service
        builder.Services.AddScoped<IUserLookupService, UserLookupService>();

        return builder;
    }
}
