namespace HelpDesk.src.Shared.Exceptions;

public class ValidationException : Exception
{
    // Bad Request 400
    // Wrong input
    // Remember ">" in YouTube Music API

    public Dictionary<string, string[]> Errors { get; }

    public ValidationException(Dictionary<string, string[]> errors)
        : base("One or more validation errors occurred.")
    {
        Errors = errors;
    }
}
