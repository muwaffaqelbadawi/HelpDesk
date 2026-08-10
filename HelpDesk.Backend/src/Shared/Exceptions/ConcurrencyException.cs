namespace HelpDesk.src.Shared.Exceptions;

public sealed class ConcurrencyException : ConflictException
{
    // 409 ConflictException
    public ConcurrencyException(string message)
        : base(message)
    {
    }

    public ConcurrencyException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
