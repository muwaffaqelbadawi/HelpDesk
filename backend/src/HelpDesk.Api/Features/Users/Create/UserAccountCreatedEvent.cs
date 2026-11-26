using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Users.Create;

public sealed record UserAccountCreatedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt,
    string TempPassword) : IDomainEvent;