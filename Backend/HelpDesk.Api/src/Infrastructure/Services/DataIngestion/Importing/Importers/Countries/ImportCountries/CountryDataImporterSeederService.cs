using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Dtos;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Importers.Countries.ImportCountries;

public sealed class CountryDataImporterSeederService(
    ICommandHandler<ImportCountriesCommand, ImportResult> handler) : ISeederService
{
    // Schema: Business (data importer)
    public int Order => DataSeederOrder.Country;

    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var command = new ImportCountriesCommand();

        await handler.HandleAsync(command, cancellationToken);
    }
}
