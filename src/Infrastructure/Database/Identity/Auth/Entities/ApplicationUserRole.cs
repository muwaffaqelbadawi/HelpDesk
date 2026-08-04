using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

public sealed class ApplicationUserRole : IdentityUserRole<Guid>
{
    // Auth.UserRoles
    // JOIN table

    // Audit fields
    public Guid? AssignedById { get; set; }
    public ApplicationUser? AssignedBy { get; set; } = null!;
    public DateTimeOffset AssignedAt { get; set; }


    public Guid? RemovedById { get; set; }
    public ApplicationUser? RemovedBy { get; set; }
    public DateTimeOffset? RemovedAt { get; set; }


    // Navigation properties (not in base class)
    public ApplicationUser User { get; set; } = null!;
    public ApplicationRole Role { get; set; } = null!;
}
