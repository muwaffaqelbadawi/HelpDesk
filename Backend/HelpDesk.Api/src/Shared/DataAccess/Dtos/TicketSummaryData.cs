namespace HelpDesk.src.Shared.DataAccess.Dtos;

public sealed record TicketSummaryData
{
    public int TotalTickets { get; init; }
    public int OpenTickets { get; init; }
    public int ClosedTickets { get; init; }
    public int AssignedTickets { get; init; }
    public int InProgress { get; init; }
    public int Pending { get; init; }
}
