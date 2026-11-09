using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.UserSession.TerminateAll;

public sealed record TerminateAllUserSessionsEvent(
    Guid SessionId,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
