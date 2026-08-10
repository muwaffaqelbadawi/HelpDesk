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

namespace HelpDesk.src.Infrastructure.Services.Seeders.Registry;

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
