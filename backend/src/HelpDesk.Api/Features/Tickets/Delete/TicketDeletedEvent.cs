using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Tickets.Delete;

public sealed record TicketDeletedEvent(
    ApplicationUser User,
    Guid TicketId,
    DateTimeOffset OccurredAt) : IDomainEvent;
