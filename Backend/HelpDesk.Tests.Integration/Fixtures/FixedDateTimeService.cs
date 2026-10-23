using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.Tests.Integration.Fixtures;

public sealed class FixedDateTimeService(DateTimeOffset now) : IDateTimeService
{
    public DateTimeOffset UtcNow => now;
    public DateTime UtcNowDateTime => now.UtcDateTime;
}
