using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Shared.Exceptions;

public sealed class AuthenticationRequiredException : Exception
{
    public AuthenticationRequiredException()
            : base(message: ApiMessages.AuthenticationRequired)
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