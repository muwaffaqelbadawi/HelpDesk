namespace HelpDesk.src.Infrastructure.Services.Api;

public sealed record ApiHealth
{
    public string Status { get; init; } = null!;
}
