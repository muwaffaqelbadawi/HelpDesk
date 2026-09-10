using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Shared.Responses;

public sealed class ApiResponse<T>(
    string message,
    IDateTimeService time,
    T? data = default)
{
    public string Message { get; init; } = message;
    public DateTimeOffset Time { get; init; } = time.UtcNow;
    public T? Data { get; init; } = data;
}

public sealed class ApiResponse(
    string message,
    IDateTimeService time)
{
    public string Message { get; init; } = message;
    public DateTimeOffset Time { get; init; } = time.UtcNow;
}
