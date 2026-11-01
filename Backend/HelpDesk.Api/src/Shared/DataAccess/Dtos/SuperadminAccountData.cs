namespace HelpDesk.src.Shared.DataAccess.Dtos;

public sealed record SuperadminAccountData
{
    public Guid UserId { get; init; }
    public string UserName { get; init; } = null!;
    public string Email { get; init; } = null!;
    public bool MustResetPassword { get; init; }
    public IReadOnlyCollection<string> Roles { get; init; } = [];
}