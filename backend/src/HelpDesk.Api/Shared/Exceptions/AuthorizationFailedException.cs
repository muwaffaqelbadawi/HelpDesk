namespace HelpDesk.Shared.Exceptions;

public sealed class AuthorizationFailedException : ForbiddenException
{
    public AuthorizationFailedException(Guid userId, Guid resourceId)
        : base(
            message: $"User '{userId}' is not authorized to access resource '{resourceId}'.")
    {
    }

    public AuthorizationFailedException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
