using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Admin.Sectors.Set;

public sealed record SectorSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
