namespace HelpDesk.src.Shared.Responses.Data;

public sealed record UserAccountRowVersionData
{
    public byte[] UserRowVersion { get; set; } = null!;
    public byte[]? EmployeeRowVersion { get; set; }
}
