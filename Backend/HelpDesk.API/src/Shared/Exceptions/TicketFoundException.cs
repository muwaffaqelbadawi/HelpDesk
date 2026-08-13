namespace HelpDesk.src.Shared.Exceptions;

public class TicketFoundException : NotFoundException
{
    public TicketFoundException(Guid ticketId)
        : base($"Ticket with ID {ticketId} not found.")
    {
    }
}
