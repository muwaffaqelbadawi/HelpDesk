using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.SystemAccounts.Superadmin;

public sealed record SuperadminCreatedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt,
    string TempPassword) : IDomainEvent;
