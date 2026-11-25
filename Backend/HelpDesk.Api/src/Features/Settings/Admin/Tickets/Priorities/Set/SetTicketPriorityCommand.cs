namespace HelpDesk.src.Features.Settings.Admin.Tickets.Priorities.Set;

public sealed record SetTicketPriorityCommand(
    Guid UserId,
    Guid TicketId,
    Guid PriorityId);
