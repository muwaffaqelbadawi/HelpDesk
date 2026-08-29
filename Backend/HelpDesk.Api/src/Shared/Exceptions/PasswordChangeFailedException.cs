namespace HelpDesk.src.Shared.Exceptions;

public class PasswordChangeFailedException : ValidationException
{

    // Bad Request 400
    public PasswordChangeFailedException(Dictionary<string, string[]> errors)
        : base(errors)
    {
    }
}
