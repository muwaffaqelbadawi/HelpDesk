using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

public sealed class TicketAttachment
{
    public Guid Id { get; set; }

    // Domain link
    public Guid TicketCommentId { get; set; }
    public TicketComment TicketComment { get; set; } = null!;

    // File metadata
    public string FileName { get; set; } = null!;
    public string ContentType { get; set; } = null!;
    public long Size { get; set; }

    // Storage reference
    public string StorageKey { get; set; } = null!;

    // Creation
    public Guid UploadedById { get; set; }
    public ApplicationUser UploadedBy { get; set; } = null!;
    public DateTimeOffset UploadedAt { get; set; }

    // Deletion
    public Guid? DeletedById { get; set; }
    public ApplicationUser? DeletedBy { get; set; }
    public DateTimeOffset? DeletedAt { get; set; }
    public bool IsDeleted { get; set; }
}
