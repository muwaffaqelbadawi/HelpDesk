namespace HelpDesk.src.Shared.Exceptions;

public sealed class UserNotFoundException : NotFoundException
{
    // 404 Not Found
    public UserNotFoundException(Guid userId)
        : base($"User '{userId}' was not found.")
    {
    }

    public UserNotFoundException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
