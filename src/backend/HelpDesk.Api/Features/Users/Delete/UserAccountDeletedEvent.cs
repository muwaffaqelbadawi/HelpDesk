using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Users.Delete;

public sealed record UserAccountDeletedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;