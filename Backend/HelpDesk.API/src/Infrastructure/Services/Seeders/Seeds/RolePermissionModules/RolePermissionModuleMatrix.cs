using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Modules;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Permissions;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Roles;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.RolePermissionModules;

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
