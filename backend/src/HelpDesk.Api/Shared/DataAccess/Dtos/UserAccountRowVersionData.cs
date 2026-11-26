namespace HelpDesk.Shared.DataAccess.Dtos;

public sealed class UserAccountRowVersionData
{
    public byte[] UserRowVersion { get; init; } = null!;
    public byte[]? EmployeeRowVersion { get; init; }
}
