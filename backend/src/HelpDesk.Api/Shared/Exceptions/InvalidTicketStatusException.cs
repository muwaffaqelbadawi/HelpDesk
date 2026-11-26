namespace HelpDesk.Shared.Exceptions;

public sealed class InvalidTicketStatusException : BusinessRuleViolationException
{
    public InvalidTicketStatusException(Guid statusId)
        : base($"The ticket status with ID '{statusId}' is invalid.")
    {
    }
}