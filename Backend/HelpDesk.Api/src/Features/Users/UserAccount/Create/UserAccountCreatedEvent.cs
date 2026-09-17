using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UserAccount.Create;

public sealed record UserAccountCreatedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt,
    string TempPassword) : IDomainEvent;