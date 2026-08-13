namespace HelpDesk.src.Shared.Responses.Data;

public sealed record class EmployeeData
{
    public Guid EmployeeId { get; init; }
    public string EmployeeNumber { get; init; } = null!;
    public string FullEnName { get; init; } = null!;
    public string FullArName { get; init; } = null!;
    public byte[]? RowVersion { get; init; } = null!;
}
