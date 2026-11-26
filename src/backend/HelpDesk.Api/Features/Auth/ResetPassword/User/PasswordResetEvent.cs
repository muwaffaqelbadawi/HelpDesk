using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.ResetPassword.User;

public sealed record PasswordResetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;