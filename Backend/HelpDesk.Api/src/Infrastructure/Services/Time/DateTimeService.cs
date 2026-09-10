using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Time;

public sealed class DateTimeService(TimeProvider timeProvider)
    : IDateTimeService
{
    public DateTimeOffset UtcNow => timeProvider.GetUtcNow();
    public DateTime UtcNowDateTime => timeProvider.GetUtcNow().UtcDateTime;
}
