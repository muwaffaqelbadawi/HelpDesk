namespace HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

public enum TicketHistoryTypes
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
