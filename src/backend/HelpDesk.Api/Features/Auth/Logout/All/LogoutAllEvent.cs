using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.Logout.All;

public sealed record LogoutAllEvent(
    Guid SessionId,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
