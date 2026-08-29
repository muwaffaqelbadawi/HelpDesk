using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Roles;

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
            Id: RoleIds.Support,
            Name: "Support",
            Code: "SUPPORT",
            SortOrder: 2),

        new(
            Id: RoleIds.Agent,
            Name: "Agent",
            Code: "AGENT",
            SortOrder: 3)
    ];

    public static LookupSeed SuperAdmin =>
        Roles.Single(x => x.Id == RoleIds.SuperAdmin);

    public static LookupSeed Admin =>
        Roles.Single(x => x.Id == RoleIds.Admin);

    public static LookupSeed Support =>
        Roles.Single(x => x.Id == RoleIds.Support);

    public static LookupSeed Agent =>
        Roles.Single(x => x.Id == RoleIds.Agent);
}
