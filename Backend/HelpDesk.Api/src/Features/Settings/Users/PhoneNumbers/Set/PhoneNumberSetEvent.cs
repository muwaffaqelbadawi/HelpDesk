using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Users.PhoneNumbers.Set;

public sealed record PhoneNumberSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
