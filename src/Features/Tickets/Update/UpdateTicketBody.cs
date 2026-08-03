namespace HelpDesk.src.Features.Tickets.Update;

public sealed record class UpdateTicketBody(
    byte[] ExpectedRowVersion,
    string Title,
    string Subject,
    Guid PriorityId,
    Guid StatusId);
