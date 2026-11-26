namespace HelpDesk.Features.Tickets.Assign;

public sealed record AssignTicketCommand(
    Guid UserId,
    Guid TicketId,
    byte[] TicketRowVersion);
