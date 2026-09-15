namespace HelpDesk.src.Shared.Responses.Data;

public sealed record UserAccountData
{
    public Guid UserId { get; init; }
    public string UserName { get; init; } = null!;
    public string Email { get; init; } = null!;
    public string TimeZone { get; set; } = null!;
    public string PreferredLanguage { get; set; } = null!;
    public string IpAddress { get; set; } = null!;
    public IReadOnlyCollection<string> Roles { get; init; } = [];
    public bool MustChangePassword { get; init; }
    public byte[]? RowVersion { get; init; } = null!;
    public EmployeeData? Employee { get; init; }
}
