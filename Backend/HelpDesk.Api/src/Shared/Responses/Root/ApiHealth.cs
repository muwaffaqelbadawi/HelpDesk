namespace HelpDesk.src.Shared.Responses.Root;

public sealed record ApiHealth
{
    public string Status { get; init; } = null!;
}
