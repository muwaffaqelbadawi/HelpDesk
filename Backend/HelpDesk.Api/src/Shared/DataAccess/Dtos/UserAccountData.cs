using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.DataAccess.Dtos;

public sealed record UserAccountData
{
    public Guid UserId { get; init; }
    public string UserName { get; init; } = null!;
    public string Email { get; init; } = null!;
    public string? TimeZone { get; set; }
    public UserLanguage PreferredLanguage { get; set; }
    public IReadOnlyCollection<string> Roles { get; init; } = [];
    public bool MustResetPassword { get; init; }
    public byte[]? RowVersion { get; init; } = null!;
    public EmployeeData? Employee { get; init; }
}
