namespace HelpDesk.Shared.Exceptions;

public sealed class InvalidTicketPriorityException : BusinessRuleViolationException
{
    public InvalidTicketPriorityException(Guid priorityId)
        : base($"The ticket priority with ID '{priorityId}' is invalid.")
    {
    }
}
