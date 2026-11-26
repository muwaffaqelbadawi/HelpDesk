using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.Login;

public sealed record LoginEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
