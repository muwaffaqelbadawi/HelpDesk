namespace HelpDesk.src.Infrastructure.Services.Seeders.Registry;

public static class SeedRegistry
{
    // Auth/RBAC
    public static readonly SeederIdentity Permissions =
        new("Auth.Permissions",
            "PermissionsSeeder",
            "v1");

    public static readonly SeederIdentity Roles =
        new("Auth.Roles",
            "RolesSeeder",
            "v1");

    public static readonly SeederIdentity Modules =
       new("Auth.Modules",
           "ModulesSeeder",
           "v1");

    public static readonly SeederIdentity RolePermissionModules =
        new("Auth.RolePermissionModules",
            "RolePermissionModulesSeeder",
            "v1");

    public static readonly SeederIdentity UserStatuses =
        new("Auth.UserStatuses",
            "UserStatusesSeeder",
            "v1");

    // Business
    public static readonly SeederIdentity Departments =
        new("Business.Departments",
            "DepartmentsSeederService",
            "v1");

    public static readonly SeederIdentity Branches =
        new("Business.Branches",
            "BranchesSeederService",
            "v1");

    public static readonly SeederIdentity EmployeeStatuses =
        new("Business.EmployeeStatuses",
            "EmployeeStatusesSeeder",
            "v1");

    public static readonly SeederIdentity TicketStatuses =
        new("Business.TicketStatuses",
            "TicketStatusesSeeder",
            "v1");

    public static readonly SeederIdentity TicketPriorities =
        new("Business.TicketPriorities",
            "TicketPrioritiesSeeder",
            "v1");
}
