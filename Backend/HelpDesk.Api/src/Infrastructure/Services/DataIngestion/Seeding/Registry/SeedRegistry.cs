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

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Registry;

public static class SeedRegistry
{
    public static readonly SeederIdentity Permissions =
        new(
            Key: "Auth.Permissions",
            Scope: nameof(PermissionSeederService),
            Version: "v1");

    public static readonly SeederIdentity Roles =
        new(
            Key: "Auth.Roles",
            Scope: nameof(RoleSeederService),
            Version: "v1");

    public static readonly SeederIdentity Modules =
       new(
           Key: "Auth.Modules",
           Scope: nameof(ModuleSeederService),
           Version: "v1");

    public static readonly SeederIdentity RolePermissionModules =
        new(
            Key: "Auth.RolePermissionModules",
            Scope: nameof(RolePermissionModulesSeederService),
            Version: "v1");

    public static readonly SeederIdentity UserStatuses =
        new(
            Key: "Auth.UserStatuses",
            Scope: nameof(UserStatusSeederService),
            Version: "v1");

    public static readonly SeederIdentity Departments =
        new(
            Key: "Business.Departments",
            Scope: nameof(DepartmentSeederService),
            Version: "v1");

    public static readonly SeederIdentity Branches =
        new(
            Key: "Business.Branches",
            Scope: nameof(BranchSeederService),
            Version: "v1");

    public static readonly SeederIdentity EmployeeStatuses =
        new(
            Key: "Business.EmployeeStatuses",
            Scope: nameof(EmployeeStatusSeederService),
            Version: "v1");

    public static readonly SeederIdentity TicketStatuses =
        new(
            Key: "Business.TicketStatuses",
            Scope: nameof(TicketStatusSeederService),
            Version: "v1");

    public static readonly SeederIdentity TicketPriorities =
        new(
            Key: "Business.TicketPriorities",
            Scope: nameof(TicketPrioritySeederService),
            Version: "v1");
}
