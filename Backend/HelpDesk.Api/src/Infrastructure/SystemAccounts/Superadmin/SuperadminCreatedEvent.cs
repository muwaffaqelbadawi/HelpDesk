using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;

public sealed record class SuperadminCreatedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt,
    string TempPassword) : IDomainEvent;
