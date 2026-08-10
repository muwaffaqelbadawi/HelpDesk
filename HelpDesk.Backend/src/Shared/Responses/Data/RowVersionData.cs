namespace HelpDesk.src.Shared.Responses.Data;

public sealed record RowVersionData
{
    public byte[] UserRowVersion { get; set; } = null!;
    public byte[]? EmployeeRowVersion { get; set; }

}
