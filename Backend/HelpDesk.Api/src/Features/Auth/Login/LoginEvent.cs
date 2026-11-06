using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Login;

public sealed record LoginEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
