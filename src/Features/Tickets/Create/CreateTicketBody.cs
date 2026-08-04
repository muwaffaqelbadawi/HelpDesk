namespace HelpDesk.src.Features.Tickets.Create;

public sealed record CreateTicketBody(
    string TicketTitle,
    string TicketSubject,
    Guid? TicketPriorityId);
