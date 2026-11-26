using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Sectors.Set;

public sealed record SectorSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
