namespace HelpDesk.src.Shared.Exceptions;

public sealed class PasswordResetRequiredException : Exception
{
    public PasswordResetRequiredException()
        : base(message: "Password reset is required before continuing.")
    {
    }
}
