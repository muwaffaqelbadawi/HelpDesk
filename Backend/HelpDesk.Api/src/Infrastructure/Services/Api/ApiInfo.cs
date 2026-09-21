namespace HelpDesk.src.Infrastructure.Services.Api;

public sealed record ApiInfo
{
    public string Name { get; init; } = null!;
    public string Version { get; init; } = null!;
    public string Status { get; init; } = null!;
}
