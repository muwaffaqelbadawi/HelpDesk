using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Modules;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Permissions;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Roles;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.RolePermissionModules;

public static class RolePermissionModuleMatrix
{
    public static IEnumerable<RolePermissionModuleLookupSeed> SuperAdmin =>
        from module in ModuleIds.All
        from permission in PermissionIds.All
        select new RolePermissionModuleLookupSeed(
            RoleIds.SuperAdmin,
            permission,
            module);

    public static IReadOnlyCollection<RolePermissionModuleLookupSeed> Admin { get; } =
    [

    ];

    public static IReadOnlyCollection<RolePermissionModuleLookupSeed> Support { get; } =
    [

    ];

    public static IReadOnlyCollection<RolePermissionModuleLookupSeed> Agent { get; } =
    [

    ];
}
