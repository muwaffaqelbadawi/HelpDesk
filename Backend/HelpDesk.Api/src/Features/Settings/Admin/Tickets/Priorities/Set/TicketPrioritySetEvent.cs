using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Admin.Tickets.Priorities.Set;

public sealed record TicketPrioritySetEvent(
    Guid UpdaterId,
    Guid TicketId,
    string PreviousPriority,
    string NewPriority,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
