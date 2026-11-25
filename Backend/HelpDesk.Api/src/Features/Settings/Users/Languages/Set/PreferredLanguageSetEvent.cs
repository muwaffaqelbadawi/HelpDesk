using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Users.Languages.Set;

public sealed record PreferredLanguageSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
