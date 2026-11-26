namespace HelpDesk.Features.Tickets.Delete;

public sealed record DeleteTicketCommand(
    Guid TicketId,
    byte[] TicketRowVersion);