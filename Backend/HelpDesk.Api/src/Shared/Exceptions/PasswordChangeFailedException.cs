namespace HelpDesk.src.Shared.Exceptions;

public class PasswordChangeFailedException : ValidationException
{
    public PasswordChangeFailedException(Dictionary<string, string[]> errors)
        : base(errors)
    {
    }
}
