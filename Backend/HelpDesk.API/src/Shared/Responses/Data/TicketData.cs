namespace HelpDesk.src.Shared.Responses.Data;

public sealed record TicketData
{
    public Guid TicketId { get; init; }
    public string TicketNumber { get; init; } = null!;
    public string TicketTitle { get; init; } = null!;
    public string TicketSubject { get; init; } = null!;
    public string TicketPriority { get; init; } = null!;
    public string TicketStatus { get; init; } = null!;
    public Guid CreatedById { get; init; }
    public DateTimeOffset CreatedAt { get; init; }
    public byte[]? TicketRowVersion { get; init; }
};
