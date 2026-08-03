namespace HelpDesk.src.Shared.Exceptions;

public sealed class UserNotFoundException : NotFoundException
{
    // 404 Not Found
    public UserNotFoundException(string id)
        : base($"User '{id}' was not found.")
    {
    }

    public UserNotFoundException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
