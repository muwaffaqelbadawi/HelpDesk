namespace HelpDesk.src.Shared.Exceptions;

public class ForbiddenException : Exception
{
    public ForbiddenException()
        : base("Forbidden access.")
    {
    }

    public ForbiddenException(string message)
        : base(message)
    {
    }

    public ForbiddenException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
