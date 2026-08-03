namespace HelpDesk.src.Features.Tickets.Create;

public sealed record CreateTicketCommand(
    string Title,
    string Subject,
    Guid? PriorityId);
