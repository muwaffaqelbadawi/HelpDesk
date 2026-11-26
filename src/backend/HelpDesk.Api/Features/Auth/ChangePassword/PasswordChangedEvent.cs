using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.ChangePassword;

public sealed record PasswordChangedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;