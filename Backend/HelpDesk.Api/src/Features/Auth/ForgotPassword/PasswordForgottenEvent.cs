using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ForgotPassword;

public sealed record PasswordForgottenEvent(
    string ResetToken,
    string NewPassword,
    string ConfirmNewPassword,
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
