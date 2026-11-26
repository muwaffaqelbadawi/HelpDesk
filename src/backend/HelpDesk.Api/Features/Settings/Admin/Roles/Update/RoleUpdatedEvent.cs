using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Roles.Update;

public sealed record RoleUpdatedEvent(
    Guid RoleId,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
