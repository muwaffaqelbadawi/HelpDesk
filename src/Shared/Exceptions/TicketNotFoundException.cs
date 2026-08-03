namespace HelpDesk.src.Shared.Exceptions;

public class TicketNotFoundException : NotFoundException
{
    public TicketNotFoundException(string ticketId)
        : base($"Ticket '{ticketId}' was not found.")
    {
    }

    public TicketNotFoundException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
