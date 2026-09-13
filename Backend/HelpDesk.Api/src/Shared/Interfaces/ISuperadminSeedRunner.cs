namespace HelpDesk.src.Shared.Interfaces;

public interface ISuperadminSeedRunner
{
    Task SeedAsync(CancellationToken cancellationToken = default);
}
