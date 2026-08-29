namespace HelpDesk.src.Shared.Responses.Data;

public sealed record AdminData
{
    public Guid UserId { get; init; }
    public string UserName { get; init; } = null!;
    public string Email { get; init; } = null!;
    public bool MustChangePassword { get; init; }
    public IReadOnlyCollection<string> Roles { get; init; } = [];
}

