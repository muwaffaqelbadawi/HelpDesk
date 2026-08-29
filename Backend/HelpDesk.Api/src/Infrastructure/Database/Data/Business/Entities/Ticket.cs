using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

public sealed class Ticket
{
    public Guid Id { get; set; }



    // Domain properties
    public string Number { get; set; } = null!;
    public string Title { get; set; } = null!;
    public string Subject { get; set; } = null!;



    // Domain link
    public Guid? StatusId { get; set; }
    public TicketStatus? Status { get; set; } = null!;

    // Domain link
    public Guid? PriorityId { get; set; }
    public TicketPriority? Priority { get; set; } = null!;



    // Creation
    public Guid CreatedById { get; set; }
    public ApplicationUser CreatedBy { get; set; } = null!;
    public DateTimeOffset CreatedAt { get; set; }



    // Assignation
    public Guid? AssignedById { get; set; }
    public ApplicationUser? AssignedBy { get; set; }
    public Guid? AssignedToId { get; set; }
    public ApplicationUser? AssignedTo { get; set; }
    public DateTimeOffset? AssignedAt { get; set; }



    // Update
    public Guid? UpdatedById { get; set; }
    public ApplicationUser? UpdatedBy { get; set; }
    public DateTimeOffset? UpdatedAt { get; set; }



    // Deletion
    public Guid? DeletedById { get; set; }
    public ApplicationUser? DeletedBy { get; set; }
    public DateTimeOffset? DeletedAt { get; set; }
    public bool IsDeleted { get; set; } // soft-delete flag




    // Close
    public Guid? ClosedById { get; set; }
    public ApplicationUser? ClosedBy { get; set; }
    public DateTimeOffset? ClosedAt { get; set; }

    // Concurrency
    public byte[] RowVersion { get; set; } = null!;



    // Navigation properties
    public ICollection<TicketHistory> Histories { get; set; } = [];
}
