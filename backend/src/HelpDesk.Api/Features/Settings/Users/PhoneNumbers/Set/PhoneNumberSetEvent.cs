using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Users.PhoneNumbers.Set;

public sealed record PhoneNumberSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
