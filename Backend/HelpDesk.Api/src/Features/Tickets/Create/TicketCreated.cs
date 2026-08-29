using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Create;

// Represents the fact that a ticket was created
// A ticket was successfully created.
public sealed record TicketCreated(
    Guid UserId,
    Guid TicketId,
    DateTimeOffset OccurredAt) : IDomainEvent;
