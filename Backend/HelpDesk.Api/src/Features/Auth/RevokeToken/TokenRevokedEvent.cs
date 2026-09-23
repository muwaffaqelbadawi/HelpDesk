using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.RevokeToken;

public sealed record TokenRevokedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;