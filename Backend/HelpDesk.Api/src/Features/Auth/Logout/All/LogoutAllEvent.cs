using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Logout.All;

public sealed record LogoutAllEvent(
    Guid SessionId,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
