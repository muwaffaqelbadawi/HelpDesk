namespace HelpDesk.src.Shared.Exceptions;

public class ValidationException(Dictionary<string, string[]> errors)
    : Exception(
        message: "One or more validation errors occurred.")
{
    public Dictionary<string, string[]> Errors { get; } = errors;
}
