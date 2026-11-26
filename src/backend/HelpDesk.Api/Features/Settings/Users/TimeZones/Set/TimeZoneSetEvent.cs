using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Users.TimeZones.Set;

public sealed record TimeZoneSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
