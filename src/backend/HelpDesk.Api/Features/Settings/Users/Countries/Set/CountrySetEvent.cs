using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Users.Countries.Set;

public sealed record CountrySetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
