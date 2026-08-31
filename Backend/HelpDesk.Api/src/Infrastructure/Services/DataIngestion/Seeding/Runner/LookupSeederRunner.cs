using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Runner;

public sealed class LookupSeederRunner : ILookupSeederRunner
{
    private readonly IEnumerable<IDataSeeder> _seeders;

    public LookupSeederRunner(
        IEnumerable<IDataSeeder> seeders)
    {
        _seeders = seeders;
    }

    public async Task SeedAsync(CancellationToken cancellationToken)
    {
        foreach (var seeder in _seeders)
        {
            await seeder.SeedAsync(cancellationToken);
        }
    }
}
