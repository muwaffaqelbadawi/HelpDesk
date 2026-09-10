namespace HelpDesk.src.Shared.Responses.Data;

public sealed record class EmployeeData
{
    public Guid EmployeeId { get; init; }
    public string EmployeeNumber { get; init; } = null!;
    public string FullEnName { get; init; } = null!;
    public string? FullArName { get; init; }
    public Guid DepartmentId { get; init; }
    public Guid SectorId { get; init; }
    public Guid CountryId { get; init; }
    public byte[]? RowVersion { get; init; } = null!;
}
