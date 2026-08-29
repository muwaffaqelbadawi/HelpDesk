namespace HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

public sealed class ApplicationRolePermissionModule
{

    // Auth.RolePermissions
    // JOIN table


    // Audit fields
    public Guid RoleId { get; set; }
    public ApplicationRole Role { get; set; } = null!;

    public Guid PermissionId { get; set; }
    public ApplicationPermission Permission { get; set; } = null!;

    public Guid ModuleId { get; set; }
    public ApplicationModule Module { get; set; } = null!;
}
