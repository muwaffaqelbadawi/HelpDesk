using HelpDesk.Infrastructure.Services.DataIngestion.Importing.Dtos;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Importing.Importers.Countries.ImportCountries;

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
            "Countries imported successfully. " +
            "Processed: {ProcessedCount} countries. " +
            "Imported: {ImportedCount} countries. " +
            "Updated: {UpdatedCount} countries. " +
            "Skipped: {SkippedCount} countries. " +
            "Duration: {DurationSeconds:F3} seconds.",
            result.ProcessedCount,
            result.ImportedCount,
            result.UpdatedCount,
            result.SkippedCount,
            result.Duration.TotalSeconds);

        return result;
    }
}
