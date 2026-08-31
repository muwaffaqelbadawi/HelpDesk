using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.RolePermissionModules;

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
