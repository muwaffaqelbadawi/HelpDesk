namespace HelpDesk.src.Shared.Exceptions;

public sealed class AuthenticationRequiredException : Exception
{
    public AuthenticationRequiredException()
            : base(message: "Authentication is required.")
    {
    }
}