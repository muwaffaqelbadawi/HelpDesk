using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Tickets.Assign;

public sealed record TicketAssignedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt,
    Guid TicketId) : IDomainEvent;
