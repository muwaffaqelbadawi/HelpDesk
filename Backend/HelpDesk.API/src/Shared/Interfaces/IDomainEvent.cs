namespace HelpDesk.src.Shared.Interfaces;

public interface IDomainEvent
{
    // Marker/contract for events

    DateTimeOffset OccurredAt { get; }
}
