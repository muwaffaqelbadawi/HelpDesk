using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Users.Update;

public sealed record UserAccountUpdatedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
