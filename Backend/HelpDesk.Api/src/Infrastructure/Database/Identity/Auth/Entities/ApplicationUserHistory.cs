namespace HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

public sealed class ApplicationUserHistory
{
    public Guid Id { get; set; }


    // User
    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;


    // History
    public UserHistoryType Type { get; set; }
    public DateTimeOffset OccurredAt { get; set; }
    public string? Description { get; set; }


    // Delete
    public Guid? DeletedById { get; set; }
    public ApplicationUser? DeletedBy { get; set; }
    public DateTimeOffset? DeletedAt { get; set; }
    public bool IsDeleted { get; set; }
}
