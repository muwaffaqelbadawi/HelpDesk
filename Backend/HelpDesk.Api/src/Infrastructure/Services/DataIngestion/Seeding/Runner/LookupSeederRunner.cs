using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Runner;

public sealed class LookupSeederRunner(IEnumerable<ISeederService> seeders)
    : ILookupSeederRunner
{
    public async Task SeedAsync(CancellationToken cancellationToken)
    {
        foreach (var seeder in seeders.OrderBy(x => x.Order))
        {
            await seeder.SeedAsync(cancellationToken);
        }
    }
}
