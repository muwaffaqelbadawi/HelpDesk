using HelpDesk.Infrastructure.Services.DataIngestion.Importing.Dtos;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Importing.Importers.TimeZones.ImportTimeZones;

public sealed class ImportTimeZonesHandler(
    ITimeZonesImporter timeZoneImporter,
    ILogger<ImportTimeZonesHandler> logger)
        : ICommandHandler<ImportTimeZonesCommand, ImportResult>
{
    public async Task<ImportResult> HandleAsync(
        ImportTimeZonesCommand command,
        CancellationToken cancellationToken)
    {
        var result = await timeZoneImporter.ImportAsync(cancellationToken);

        logger.LogInformation(
            "TimeZones imported successfully. " +
            "Processed: {ProcessedCount} TimeZones. " +
            "Imported: {ImportedCount} TimeZones. " +
            "Updated: {UpdatedCount} TimeZones. " +
            "Skipped: {SkippedCount} TimeZones. " +
            "Duration: {DurationSeconds:F3} seconds.",
            result.ProcessedCount,
            result.ImportedCount,
            result.UpdatedCount,
            result.SkippedCount,
            result.Duration.TotalSeconds);

        return result;
    }
}
