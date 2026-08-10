namespace HelpDesk.src.Features.Tickets.Update;

public sealed record UpdateTicketCommand(
    Guid TicketId,
    string TicketTitle,
    string TicketSubject,
    Guid TicketPriorityId,
    Guid TicketStatusId,
    byte[] TicketRowVersion);