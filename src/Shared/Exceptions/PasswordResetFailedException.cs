namespace HelpDesk.src.Shared.Exceptions;

public class PasswordResetFailedException : ValidationException
{
    // Bad Request 400
    public PasswordResetFailedException(Dictionary<string, string[]> errors)
    : base(errors)
    {
    }
}
