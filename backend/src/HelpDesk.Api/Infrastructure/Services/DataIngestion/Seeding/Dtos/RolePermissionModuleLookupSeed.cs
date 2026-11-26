namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;

public sealed record RolePermissionModuleLookupSeed(
    Guid RoleId,
    Guid PermissionId,
    Guid ModuleId);
