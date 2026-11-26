namespace HelpDesk.Features.Tickets.Assign;

public sealed record AssignTicketBody(
    Guid TicketId,
    byte[] TicketRowVersion);
