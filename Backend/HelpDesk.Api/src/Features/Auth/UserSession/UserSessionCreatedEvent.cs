using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.UserSession;

public sealed record UserSessionCreatedEvent(
    Guid UserId,
    DateTimeOffset OccurredAt) : IDomainEvent;