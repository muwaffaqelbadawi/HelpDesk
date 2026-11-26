using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Roles.Delete;

public sealed record RoleDeletedEvent(
    Guid RoleId,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;