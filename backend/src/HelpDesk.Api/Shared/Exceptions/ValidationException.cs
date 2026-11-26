using HelpDesk.Shared.Responses;

namespace HelpDesk.Shared.Exceptions;

public class ValidationException(Dictionary<string, string[]> errors)
    : Exception(
        message: ApiMessages.ValidationException)
{
    public Dictionary<string, string[]> Errors { get; } = errors;
}
