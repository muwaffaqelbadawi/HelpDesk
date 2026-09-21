namespace HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

public enum TicketHistoryType
{
    Created,
    Updated,
    Assigned,
    Deleted,
    Reassigned,
    Unassigned,
    StatusChanged,
    PriorityChanged,
    Closed,
    Reopened
}
