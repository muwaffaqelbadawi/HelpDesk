namespace HelpDesk.src.Infrastructure.Services.Kestrel;

public sealed class KestrelOptions
{
    public string Pem { get; init; } = null!;
    public string Key { get; init; } = null!;
}
