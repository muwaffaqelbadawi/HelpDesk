using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Infrastructure.Database.Data.Business.Entities;

public sealed class TicketComment
{
    public Guid Id { get; set; }

    // Domain link
    public Guid TicketId { get; set; }
    public Ticket Ticket { get; set; } = null!;

    // Content
    public string Content { get; set; } = null!;

    // Creation
    public Guid CreatedById { get; set; }
    public ApplicationUser CreatedBy { get; set; } = null!;
    public DateTimeOffset CreatedAt { get; set; }

    // Update
    public Guid? UpdatedById { get; set; }
    public ApplicationUser? UpdatedBy { get; set; }
    public DateTimeOffset? UpdatedAt { get; set; }

    // Deletion
    public Guid? DeletedById { get; set; }
    public ApplicationUser? DeletedBy { get; set; }
    public DateTimeOffset? DeletedAt { get; set; }
    public bool IsDeleted { get; set; }

    // IsInternal
    public bool IsInternal { get; set; }


    // Navigation properties
    public ICollection<TicketAttachment> Attachments { get; set; } = [];
}
