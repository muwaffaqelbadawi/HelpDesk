namespace HelpDesk.src.Shared.Exceptions;

public sealed class PasswordChangeFailedException : ValidationException
{
    public PasswordChangeFailedException(Dictionary<string, string[]> errors)
        : base(errors)
    {
    }
}
