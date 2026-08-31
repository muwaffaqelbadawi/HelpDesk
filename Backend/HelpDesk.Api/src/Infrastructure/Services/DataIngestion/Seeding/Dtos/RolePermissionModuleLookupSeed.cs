namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

public sealed record RolePermissionModuleLookupSeed(
    Guid RoleId,
    Guid PermissionId,
    Guid ModuleId);
