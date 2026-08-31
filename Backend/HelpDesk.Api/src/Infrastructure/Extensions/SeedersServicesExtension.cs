using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Lookup;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Runner;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Branches;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Departments;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Modules;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Permissions;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.RolePermissionModules;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Roles;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketStatuses;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
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
