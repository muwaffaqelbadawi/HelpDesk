namespace HelpDesk.src.Shared.Responses.Data;

public sealed record class EmployeeData
{
    public Guid EmployeeId { get; init; }
    public string EmployeeNumber { get; init; } = null!;
    public string FullEnName { get; init; } = null!;
    public string? FullArName { get; init; }
    public string? Department { get; init; }
    public string? Sector { get; init; }
    public string? Country { get; init; }
    public byte[] RowVersion { get; init; } = null!;
}
