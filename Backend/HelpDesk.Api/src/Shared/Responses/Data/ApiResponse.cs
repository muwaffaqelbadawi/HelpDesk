namespace HelpDesk.src.Shared.Responses.Data;

public sealed class ApiResponse<T>
{
    public string Message { get; init; }
    public DateTimeOffset Time { get; init; }
    public T? Data { get; init; }

    public ApiResponse(string message, DateTimeOffset time, T? data = default)
    {
        Message = message;
        Time = time;
        Data = data;
    }
}
