using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Delete;

public sealed record TicketDeletedEvent(
    ApplicationUser User,
    Guid TicketId,
    DateTimeOffset OccurredAt) : IDomainEvent;
