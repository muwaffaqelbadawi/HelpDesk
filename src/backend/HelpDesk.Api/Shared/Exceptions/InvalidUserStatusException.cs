namespace HelpDesk.Shared.Exceptions;

public sealed class InvalidUserStatusException : BusinessRuleViolationException
{
    public InvalidUserStatusException(Guid statusId)
        : base($"The user status with ID '{statusId}' is invalid.")
    {
    }
}
