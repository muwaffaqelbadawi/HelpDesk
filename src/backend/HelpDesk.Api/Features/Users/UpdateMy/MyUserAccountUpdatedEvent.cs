using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Users.UpdateMy;

public sealed record MyUserAccountUpdatedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
