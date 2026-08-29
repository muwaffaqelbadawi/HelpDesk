namespace HelpDesk.src.Shared.Exceptions;

public class InvalidTicketPriorityException : BusinessRuleViolationException
{
    public InvalidTicketPriorityException(Guid priorityId)
        : base($"The ticket priority with ID '{priorityId}' is invalid.")
    {
    }
}
