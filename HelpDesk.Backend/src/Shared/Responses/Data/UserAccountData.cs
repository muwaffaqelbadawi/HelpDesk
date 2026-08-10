namespace HelpDesk.src.Shared.Responses.Data;

public sealed record UserAccountData
{
    public Guid UserId { get; init; }
    public string UserName { get; init; } = null!;
    public string Email { get; init; } = null!;
    public byte[] RowVersion { get; init; } = null!;
    public bool MustChangePassword { get; init; }
    public IReadOnlyCollection<string> Roles { get; init; } = [];
    public EmployeeData? Employee { get; init; }
}
