namespace HelpDesk.Shared.Exceptions;

public sealed class TicketNotFoundException : NotFoundException
{
    public TicketNotFoundException()
        : base("Ticket was not found.")
    {
    }
}
