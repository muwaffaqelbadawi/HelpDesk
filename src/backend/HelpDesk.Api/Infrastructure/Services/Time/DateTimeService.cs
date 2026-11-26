using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Services.Time;

public sealed class DateTimeService(TimeProvider timeProvider) : IDateTimeService
{
    public DateTimeOffset UtcNow => timeProvider.GetUtcNow();
    public DateTime UtcNowDateTime => timeProvider.GetUtcNow().UtcDateTime;
}
