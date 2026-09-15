using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Login;

public sealed record UserLoggedInEvent(
    Guid UserId,
    DateTimeOffset OccurredAt) : IDomainEvent;
