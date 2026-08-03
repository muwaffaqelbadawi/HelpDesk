namespace HelpDesk.src.Features.Tickets.Formatters;

public static class TicketNumberFormatter
{
    public static string Format(long number)
        => $"TKT-{number:D6}";
}
