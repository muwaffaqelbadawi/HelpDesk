using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Roles.Delete;

public sealed record RoleDeletedEvent(
    Guid RoleId,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;