using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.ResetPassword.Admin;

public sealed record AdminPasswordResetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;