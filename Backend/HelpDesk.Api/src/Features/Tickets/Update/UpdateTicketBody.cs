namespace HelpDesk.src.Features.Tickets.Update;

public sealed record UpdateTicketBody(
    string TicketTitle,
    string TicketSubject,
    Guid TicketPriorityId,
    Guid TicketStatusId,
    byte[] TicketRowVersion);
