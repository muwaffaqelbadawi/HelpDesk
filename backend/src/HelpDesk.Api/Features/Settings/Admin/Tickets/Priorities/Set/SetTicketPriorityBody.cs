namespace HelpDesk.Features.Settings.Admin.Tickets.Priorities.Set;

public sealed record SetTicketPriorityBody(
    Guid TicketId,
    Guid PriorityId);
