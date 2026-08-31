using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Histories.HistoryTypes;

namespace HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

public sealed class TicketHistory
{
    public Guid Id { get; set; }


    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;

    public Guid TicketId { get; set; }
    public Ticket Ticket { get; set; } = null!;

    public TicketHistoryTypes Type { get; set; }

    public string? Description { get; set; }

    public Guid? OldValueId { get; set; }
    public Guid? NewValueId { get; set; }

    public DateTimeOffset OccurredAt { get; set; }
}
