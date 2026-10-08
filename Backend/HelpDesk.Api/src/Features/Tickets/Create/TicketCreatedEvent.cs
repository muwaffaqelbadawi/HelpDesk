using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Create;

public sealed record TicketCreatedEvent(
    ApplicationUser User,
    Guid TicketId,
    DateTimeOffset OccurredAt) : IDomainEvent;