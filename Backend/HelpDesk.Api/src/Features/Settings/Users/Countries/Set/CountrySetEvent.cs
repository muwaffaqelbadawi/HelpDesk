using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Users.Countries.Set;

public sealed record CountrySetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
