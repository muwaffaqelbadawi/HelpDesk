using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

public sealed class ApplicationRole : IdentityRole<Guid>
{
    // Auth.Roles
    public string Code { get; set; } = null!;
    public bool IsActive { get; set; } = true;
    public int SortOrder { get; set; }


    // RBAC
    public ICollection<ApplicationUserRole> UserRoles { get; set; } = [];
    public ICollection<ApplicationRolePermissionModule> RolePermissionModules { get; set; } = [];
}
