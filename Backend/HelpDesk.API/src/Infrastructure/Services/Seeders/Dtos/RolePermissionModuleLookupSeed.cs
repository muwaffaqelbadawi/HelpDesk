namespace HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

public sealed record RolePermissionModuleLookupSeed(
    Guid RoleId,
    Guid PermissionId,
    Guid ModuleId);
