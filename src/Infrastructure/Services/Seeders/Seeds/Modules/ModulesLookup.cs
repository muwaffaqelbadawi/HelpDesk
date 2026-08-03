using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Modules;

public static class ModulesLookup
{
    public static IReadOnlyCollection<LookupSeed> Modules { get; } =
    [
        new(
            Id: ModuleIds.Dashboard,
            Name: "Dashboard",
            Code: "DASHBOARD",
            SortOrder: 0),

        new(
            Id: ModuleIds.Users,
            Name: "Users",
            Code: "USERS",
            SortOrder: 1),

        new(
            Id: ModuleIds.Tickets,
            Name: "Tickets",
            Code: "TICKETS",
            SortOrder: 2),

        new(
            Id: ModuleIds.Reports,
            Name: "Reports",
            Code: "REPORTS",
            SortOrder: 3),

        new(
            Id: ModuleIds.Notifications,
            Name: "Notifications",
            Code: "NOTIFICATIONS",
            SortOrder: 4),

        new(
            Id: ModuleIds.Settings,
            Name: "Settings",
            Code: "SETTINGS",
            SortOrder: 5)
    ];
}
