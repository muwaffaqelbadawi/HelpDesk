namespace HelpDesk.src.Shared.Exceptions;

public sealed class AuthenticationRequiredException : Exception
{
    public AuthenticationRequiredException()
            : base(message: "Authentication is required.")
    {
    }

    public AuthenticationRequiredException(string message)
            : base(message)
    {
    }

    public AuthenticationRequiredException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}