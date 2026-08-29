namespace HelpDesk.src.Shared.Exceptions;

public class ConflictException : Exception
{
    public ConflictException()
        : base("One or more conflict errors occurred.")
    {
    }

    public ConflictException(string message)
        : base(message)
    {
    }

    public ConflictException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
