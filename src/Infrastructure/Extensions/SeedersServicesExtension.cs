using HelpDesk.src.Infrastructure.Services.Seeders.Lookup;
using HelpDesk.src.Infrastructure.Services.Seeders.Runner;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Branches;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Departments;
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
        // Auth/RBAC
        builder.Services.AddScoped<IDataSeeder, RoleSeederService>();
        builder.Services.AddScoped<IDataSeeder, PermissionSeederService>();
        builder.Services.AddScoped<IDataSeeder, ModuleSeederService>();
        builder.Services.AddScoped<IDataSeeder, RolePermissionModulesSeederService>();
        builder.Services.AddScoped<IDataSeeder, UserStatusSeederService>();

        // Business
        builder.Services.AddScoped<IDataSeeder, DepartmentSeederService>();
        builder.Services.AddScoped<IDataSeeder, BranchSeederService>();
        builder.Services.AddScoped<IDataSeeder, TicketStatusSeederService>();
        builder.Services.AddScoped<IDataSeeder, TicketPrioritySeederService>();

        // Runner
        builder.Services.AddScoped<ILookupSeederRunner, LookupSeederRunner>();


        // Register TicketLookupService as a scoped service
        builder.Services.AddScoped<ITicketLookupService, TicketLookupService>();

        // Register UserLookupService as a scoped service
        builder.Services.AddScoped<IUserLookupService, UserLookupService>();

        return builder;
    }
}
