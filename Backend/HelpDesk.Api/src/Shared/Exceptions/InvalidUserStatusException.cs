namespace HelpDesk.src.Shared.Exceptions;

public class InvalidUserStatusException : BusinessRuleViolationException
{
    public InvalidUserStatusException(Guid statusId)
        : base($"The user status with ID '{statusId}' is invalid.")
    {
    }
}
