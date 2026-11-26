using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.ForgotPassword;

public sealed record PasswordForgottenEvent(
    string ResetToken,
    string NewPassword,
    string ConfirmPassword,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
