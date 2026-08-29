namespace HelpDesk.src.Features.Tickets.Delete;

public sealed record DeleteTicketCommand(
    Guid TicketId,
    byte[] TicketRowVersion);