namespace HelpDesk.src.Shared.Exceptions;

public sealed class PasswordResetFailedException : ValidationException
{
    public PasswordResetFailedException(Dictionary<string, string[]> errors)
        : base(errors)
    {
    }
}
