using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UserAccount.Admin.Delete;

public sealed record UserAccountDeletedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;