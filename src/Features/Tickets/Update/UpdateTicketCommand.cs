namespace HelpDesk.src.Features.Tickets.Update;

public sealed record UpdateTicketCommand(
    Guid TicketId,
    string Title,
    string Subject,
    Guid PriorityId,
    Guid StatusId,
    byte[] ExpectedRowVersion);