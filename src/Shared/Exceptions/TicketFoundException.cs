namespace HelpDesk.src.Shared.Exceptions;

public class TicketFoundException : NotFoundException
{
    public TicketFoundException(string id)
        : base($"Ticket with ID {id} not found.")
    {
    }
}
