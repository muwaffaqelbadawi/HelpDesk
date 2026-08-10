namespace HelpDesk.src.Shared.Responses.Data;

public sealed record AdminTicketData
{
    public Guid TicketId { get; set; }
    public string TicketNumber { get; set; } = null!;
    public string TicketTitle { get; set; } = null!;
    public string TicketSubject { get; set; } = null!;
    public string TicketStatus { get; set; } = null!;
    public string TicketPriority { get; set; } = null!;
    public Guid? AssignedById { get; set; }
    public string? AssignedByName { get; set; }
    public Guid? AssignedToId { get; set; }
    public string? AssignedToName { get; set; }
    public DateTimeOffset? AssignedAt { get; set; }
    public byte[] TicketRowVersion { get; set; } = null!;
}
