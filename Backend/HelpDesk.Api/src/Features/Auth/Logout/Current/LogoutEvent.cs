using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Logout.Current;

public sealed record LogoutEvent(
    Guid SessionId,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
