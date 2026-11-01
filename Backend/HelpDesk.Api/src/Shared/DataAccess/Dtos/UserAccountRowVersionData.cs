namespace HelpDesk.src.Shared.DataAccess.Dtos;

public sealed record UserAccountRowVersionData
{
    public byte[] UserRowVersion { get; set; } = null!;
    public byte[]? EmployeeRowVersion { get; set; }
}
