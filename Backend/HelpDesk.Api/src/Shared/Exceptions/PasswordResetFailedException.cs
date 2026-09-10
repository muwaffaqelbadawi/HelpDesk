namespace HelpDesk.src.Shared.Exceptions;

public class PasswordResetFailedException : ValidationException
{
    public PasswordResetFailedException(Dictionary<string, string[]> errors)
        : base(errors)
    {
    }
}
