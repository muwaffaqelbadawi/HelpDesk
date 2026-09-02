using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Dtos;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Importers.Countries.ImportCountries;

public sealed class ImportCountriesHandler(
    ICountryImporter countryImporter,
    ILogger<ImportCountriesHandler> logger)
        : ICommandHandler<ImportCountriesCommand, ImportResult>
{
    public async Task<ImportResult> HandleAsync(
        ImportCountriesCommand command,
        CancellationToken cancellationToken)
    {
        var result = await countryImporter.ImportAsync(cancellationToken);

        logger.LogInformation(
            "Countries imported successfully. Imported: {Count}",
            result.ImportedCount);

        return result;
    }
}
