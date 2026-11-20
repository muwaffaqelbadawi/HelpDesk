using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.Settings.SetTimeZone;

public sealed record UserTimeZoneSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
