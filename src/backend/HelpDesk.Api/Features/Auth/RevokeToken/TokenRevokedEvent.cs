using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.RevokeToken;

public sealed record TokenRevokedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;