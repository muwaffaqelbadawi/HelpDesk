using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Assign;

public sealed record TicketAssignedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
