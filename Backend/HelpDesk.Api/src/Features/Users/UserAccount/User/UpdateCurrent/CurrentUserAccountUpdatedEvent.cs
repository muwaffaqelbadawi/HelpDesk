using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UserAccount.User.UpdateCurrent;

public sealed record CurrentUserAccountUpdatedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
