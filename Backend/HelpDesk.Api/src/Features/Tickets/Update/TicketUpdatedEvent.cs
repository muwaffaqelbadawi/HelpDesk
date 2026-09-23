using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Update;

public sealed record TicketUpdatedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
