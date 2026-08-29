using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.RolePermissionModules;

public static class RolePermissionModulesLookup
{
    public static IReadOnlyCollection<RolePermissionModuleLookupSeed> Maps { get; } =
    [
        .. RolePermissionModuleMatrix.SuperAdmin


        //.. RolePermissionModuleMatrix.Admin,
        //.. RolePermissionModuleMatrix.Support,
        //.. RolePermissionModuleMatrix.Agent,
    ];
}
