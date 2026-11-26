using HelpDesk.Infrastructure.Services.DataIngestion.Importing.Dtos;
using HelpDesk.Infrastructure.Services.DataIngestion.Importing.Importers.Countries.ImportCountries;
using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.Countries;

public sealed class CountrySeederService(
    ICommandHandler<ImportCountriesCommand, ImportResult> handler) : ISeederService
{
    // Schema: Business (data importer)
    public int Order => DataSeederOrder.Country;

    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var command = new ImportCountriesCommand();

        await handler.HandleAsync(
            command,
            cancellationToken);
    }
}
