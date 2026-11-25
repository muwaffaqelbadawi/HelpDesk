namespace HelpDesk.src.Shared.DataAccess.Dtos;

public sealed class EmployeeData
{
    public Guid EmployeeId { get; init; }
    public string EmployeeNumber { get; init; } = null!;
    public string FullEnName { get; init; } = null!;
    public string? FullArName { get; init; }
    public string? JobTitle { get; init; }
    public Guid? DepartmentId { get; init; }
    public string? Department { get; init; }
    public Guid? SectorId { get; init; }
    public string? Sector { get; init; }
    public Guid? CountryId { get; init; }
    public string? Country { get; init; }
    public byte[] RowVersion { get; init; } = null!;
}
