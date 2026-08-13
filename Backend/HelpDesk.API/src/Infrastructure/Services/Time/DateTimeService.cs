using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Time;

public sealed class DateTimeService : IDateTimeService
{
    private readonly TimeProvider _timeProvider;

    public DateTimeService(
        TimeProvider timeProvider)
    {
        _timeProvider = timeProvider;
    }

    public DateTimeOffset UtcNow => _timeProvider.GetUtcNow();
    public DateTime UtcNowDateTime => _timeProvider.GetUtcNow().UtcDateTime;
}
