using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Modules;

public static class ModulesLookup
{
    // 6 Modules

    public static IReadOnlyCollection<LookupSeed> Modules { get; } =
    [
        new(
            Id: ModuleIds.Users,
            Name: "Users",
            Code: "USERS",
            SortOrder: 1),

        new(
            Id: ModuleIds.Roles,
            Name: "Roles",
            Code: "ROLES",
            SortOrder: 2),

        new(
            Id: ModuleIds.Permissions,
            Name: "Permissions",
            Code: "PERMISSIONS",
            SortOrder: 3),

        new(
            Id: ModuleIds.Modules,
            Name: "Modules",
            Code: "MODULES",
            SortOrder: 4),

        new(
            Id: ModuleIds.Tickets,
            Name: "Tickets",
            Code: "TICKETS",
            SortOrder: 5),

        new(
            Id: ModuleIds.Employees,
            Name: "Employees",
            Code: "EMPLOYEES",
            SortOrder: 6),
    ];
}
