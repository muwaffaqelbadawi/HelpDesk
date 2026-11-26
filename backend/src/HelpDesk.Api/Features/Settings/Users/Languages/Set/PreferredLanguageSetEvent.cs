using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Users.Languages.Set;

public sealed record PreferredLanguageSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
