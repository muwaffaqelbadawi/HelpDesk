namespace HelpDesk.src.Shared.Interfaces;

public interface IDateTimeService
{
    DateTimeOffset UtcNow { get; }
    DateTime UtcNowDateTime { get; }
}
