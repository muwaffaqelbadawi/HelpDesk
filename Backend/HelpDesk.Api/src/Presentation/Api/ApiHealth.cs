namespace HelpDesk.src.Presentation.Api;

public sealed record ApiHealth
{
    public string Status { get; init; } = null!;
}
