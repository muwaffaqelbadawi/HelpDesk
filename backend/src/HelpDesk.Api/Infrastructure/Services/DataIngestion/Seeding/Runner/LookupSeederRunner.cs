using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Runner;

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
