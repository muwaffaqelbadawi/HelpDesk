using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ResetPassword.Admin;

public sealed record AdminPasswordResetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;