using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.Modules;

public static class ModulesLookup
{
    public static IReadOnlyCollection<LookupSeed> Modules { get; } =
    [
        new(
            Id: ModuleIds.Auth,
            Name: "Auth",
            Code: "BRANCHES"),

        new(
            Id: ModuleIds.Settings,
            Name: "Settings",
            Code: "COMPANIES"),

        new(
            Id: ModuleIds.Tickets,
            Name: "Tickets",
            Code: "TICKETS"),

        new(
            Id: ModuleIds.Users,
            Name: "Users",
            Code: "USERS"),
    ];
}
