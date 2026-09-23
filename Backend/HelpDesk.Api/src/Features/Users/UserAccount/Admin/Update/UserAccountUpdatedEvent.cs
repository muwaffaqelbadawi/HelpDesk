using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UserAccount.Admin.Update;

public sealed record UserAccountUpdatedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
