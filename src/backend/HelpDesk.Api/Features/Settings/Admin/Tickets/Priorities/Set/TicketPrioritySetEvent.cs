using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Tickets.Priorities.Set;

public sealed record TicketPrioritySetEvent(
    Guid UpdaterId,
    Guid TicketId,
    string PreviousPriority,
    string NewPriority,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
