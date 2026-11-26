using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface IDomainEvent
{
    ApplicationUser User { get; }
    DateTimeOffset OccurredAt { get; }
}
