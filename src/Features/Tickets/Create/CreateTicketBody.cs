namespace HelpDesk.src.Features.Tickets.Create;

public sealed record CreateTicketBody(
    string Title,
    string Subject,
    Guid? PriorityId);
