using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Tickets.Update;

public sealed record TicketUpdatedEvent(
    ApplicationUser User,
    Guid TicketId,
    DateTimeOffset OccurredAt) : IDomainEvent;
