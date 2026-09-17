using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IDomainEvent
{
    ApplicationUser User { get; }
    DateTimeOffset OccurredAt { get; }
}
