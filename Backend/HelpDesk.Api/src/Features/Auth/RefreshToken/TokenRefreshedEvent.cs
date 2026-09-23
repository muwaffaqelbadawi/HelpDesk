using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.RefreshToken;

public sealed record TokenRefreshedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
