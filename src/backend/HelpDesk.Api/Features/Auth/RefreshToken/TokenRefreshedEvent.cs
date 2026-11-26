using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.RefreshToken;

public sealed record TokenRefreshedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
