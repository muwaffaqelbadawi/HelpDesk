namespace HelpDesk.Shared.DataAccess.Dtos;

public sealed class UserAccountData
{
    public Guid UserId { get; init; }
    public string UserName { get; init; } = null!;
    public string Email { get; init; } = null!;
    public Guid? TimeZoneId { get; init; }
    public string? TimeZone { get; init; }
    public Guid? PreferredLanguageId { get; init; }
    public string? PreferredLanguage { get; init; }
    public IReadOnlyCollection<string> Roles { get; init; } = [];
    public bool MustResetPassword { get; init; }
    public byte[]? RowVersion { get; init; } = null!;
    public EmployeeData? Employee { get; init; }
}
