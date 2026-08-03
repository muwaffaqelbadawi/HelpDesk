namespace HelpDesk.src.Shared.Exceptions;

public sealed class AuthorizationFailedException : ForbiddenException
{
    public AuthorizationFailedException()
        : base("Unauthorized user.")
    {
    }

    public AuthorizationFailedException(string message)
        : base(message)
    {
    }

    public AuthorizationFailedException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
