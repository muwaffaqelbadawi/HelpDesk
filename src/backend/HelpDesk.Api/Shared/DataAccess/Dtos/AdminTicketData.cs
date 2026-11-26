namespace HelpDesk.Shared.DataAccess.Dtos;

public sealed class AdminTicketData
{
    public Guid TicketId { get; init; }
    public string TicketNumber { get; init; } = null!;
    public string TicketTitle { get; init; } = null!;
    public string TicketSubject { get; init; } = null!;
    public string TicketStatus { get; init; } = null!;
    public string TicketPriority { get; init; } = null!;
    public Guid? AssignedById { get; init; }
    public string? AssignedByName { get; init; }
    public Guid? AssignedToId { get; init; }
    public string? AssignedToName { get; init; }
    public DateTimeOffset? AssignedAt { get; init; }
    public byte[] TicketRowVersion { get; init; } = null!;
}
