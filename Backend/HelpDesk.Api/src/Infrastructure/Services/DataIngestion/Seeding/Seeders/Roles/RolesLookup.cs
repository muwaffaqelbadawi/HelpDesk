using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Roles;

public static partial class RolesLookup
{
    public static IReadOnlyCollection<LookupSeed> Roles { get; } =
    [
        new(
            Id: RoleIds.SuperAdmin,
            Name: "SuperAdmin",
            Code: "SUPERADMIN",
            SortOrder: 0),

        new(
            Id: RoleIds.Admin,
            Name: "Admin",
            Code: "ADMIN",
            SortOrder: 1),

        new(
            Id: RoleIds.Customer,
            Name: "Customer",
            Code: "CUSTOMER",
            SortOrder: 2),

        new(
            Id: RoleIds.Support,
            Name: "Support",
            Code: "SUPPORT",
            SortOrder: 3),

        new(
            Id: RoleIds.Agent,
            Name: "Agent",
            Code: "AGENT",
            SortOrder: 4)
    ];
}
