using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Roles.Assign;

public sealed record RoleAssignedEvent(
    Guid RoleId,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
