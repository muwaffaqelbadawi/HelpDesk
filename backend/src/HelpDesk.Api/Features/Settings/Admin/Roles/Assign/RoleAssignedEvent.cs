using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Roles.Assign;

public sealed record RoleAssignedEvent(
    Guid RoleId,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
