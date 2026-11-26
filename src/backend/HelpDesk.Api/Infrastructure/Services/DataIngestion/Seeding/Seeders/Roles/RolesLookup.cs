using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.Roles;

public static partial class RolesLookup
{
    public static IReadOnlyCollection<LookupSeed> Roles { get; } =
    [
        new(
            Id: RoleIds.SuperAdmin,
            Name: "SuperAdmin",
            Code: "SUPERADMIN"),

        new(
            Id: RoleIds.Admin,
            Name: "Admin",
            Code: "ADMIN"),

        new(
            Id: RoleIds.Customer,
            Name: "Customer",
            Code: "CUSTOMER"),

        new(
            Id: RoleIds.Support,
            Name: "Support",
            Code: "SUPPORT"),

        new(
            Id: RoleIds.Agent,
            Name: "Agent",
            Code: "AGENT")
    ];
}
