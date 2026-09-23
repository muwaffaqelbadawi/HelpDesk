using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed record PasswordResetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;