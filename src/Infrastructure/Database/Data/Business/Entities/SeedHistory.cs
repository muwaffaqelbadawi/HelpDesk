namespace HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

public sealed class SeedHistory
{
    public string Key { get; set; } = null!;
    public string Version { get; set; } = null!;
    public string Scope { get; set; } = null!;
    public DateTimeOffset AppliedAt { get; set; }
}
