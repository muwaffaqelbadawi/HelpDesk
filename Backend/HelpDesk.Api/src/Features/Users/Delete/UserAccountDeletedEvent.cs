using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.Delete;

public sealed record UserAccountDeletedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;