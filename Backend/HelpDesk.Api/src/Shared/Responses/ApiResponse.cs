namespace HelpDesk.src.Shared.Responses;

public sealed class ApiResponse<T>(
    string message,
    DateTimeOffset time,
    T? data = default)
{
    public string Message { get; init; } = message;
    public DateTimeOffset Time { get; init; } = time;
    public T? Data { get; init; } = data;
}