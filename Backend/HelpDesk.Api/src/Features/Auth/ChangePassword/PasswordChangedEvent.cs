using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ChangePassword;

public sealed record PasswordChangedEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;