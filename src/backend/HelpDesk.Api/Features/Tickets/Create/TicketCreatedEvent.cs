using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Tickets.Create;

public sealed record TicketCreatedEvent(
    ApplicationUser User,
    Guid TicketId,
    DateTimeOffset OccurredAt) : IDomainEvent;