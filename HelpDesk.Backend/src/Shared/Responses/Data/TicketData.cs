namespace HelpDesk.src.Shared.Responses.Data;

public sealed record TicketData
{
    public Guid TicketId { get; set; }
    public string TicketNumber { get; set; } = null!;
    public string TicketTitle { get; set; } = null!;
    public string TicketSubject { get; set; } = null!;
    public string TicketPriority { get; set; } = null!;
    public string TicketStatus { get; set; } = null!;
    public byte[]? TicketRowVersion { get; set; }
};
