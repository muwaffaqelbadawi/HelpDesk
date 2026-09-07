namespace HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

public sealed class ApplicationUserSession
{
    public Guid Id { get; set; }


    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;


    public string? UserAgent { get; set; }
    public string? Browser { get; set; }
    public string? IpAddress { get; set; }


    // Create
    public DateTimeOffset CreatedAt { get; set; }


    // Last activity
    public DateTimeOffset? LastActivityAt { get; set; }


    // Delete
    public Guid? DeletedById { get; set; }
    public ApplicationUserSession? DeletedBy { get; set; }
    public DateTimeOffset? DeletedAt { get; set; }
    public bool IsDeleted { get; set; }


    public DateTimeOffset? ExpiresAt { get; set; }
}
