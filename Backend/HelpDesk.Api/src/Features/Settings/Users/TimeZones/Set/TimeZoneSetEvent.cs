using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Users.TimeZones.Set;

public sealed record TimeZoneSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
