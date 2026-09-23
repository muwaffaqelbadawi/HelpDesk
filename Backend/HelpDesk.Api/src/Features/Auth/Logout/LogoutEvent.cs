using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Logout;

public sealed record LogoutEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
