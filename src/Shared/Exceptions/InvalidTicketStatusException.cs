namespace HelpDesk.src.Shared.Exceptions;

public class InvalidTicketStatusException : BusinessRuleViolationException
{
    public InvalidTicketStatusException(Guid statusId)
        : base($"The ticket status with ID '{statusId}' is invalid.")
    {
    }
}