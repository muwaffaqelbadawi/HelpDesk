namespace HelpDesk.src.Features.Tickets.Create;

public sealed record CreateTicketCommand(
    string TicketTitle,
    string TicketSubject,
    Guid? TicketPriorityId);
