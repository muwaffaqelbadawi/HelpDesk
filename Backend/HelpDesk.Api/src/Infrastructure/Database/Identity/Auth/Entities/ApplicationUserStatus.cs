namespace HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

public sealed class ApplicationUserStatus
{
    // Auth.UserStatuses
    public Guid Id { get; set; }


    public string Code { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string NormalizedName { get; set; } = null!;
    public bool IsActive { get; set; }
    public int SortOrder { get; set; }


    // RBAC
    public ICollection<ApplicationUser> Users { get; set; }
        = new List<ApplicationUser>();
}
