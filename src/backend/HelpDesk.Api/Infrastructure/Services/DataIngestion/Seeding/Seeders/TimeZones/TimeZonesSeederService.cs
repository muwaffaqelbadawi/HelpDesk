using HelpDesk.Infrastructure.Services.DataIngestion.Importing.Dtos;
using HelpDesk.Infrastructure.Services.DataIngestion.Importing.Importers.TimeZones.ImportTimeZones;
using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.TimeZones;

public sealed class TimeZonesSeederService(
    ICommandHandler<ImportTimeZonesCommand, ImportResult> handler) : ISeederService
{
    // Schema: Business (data importer)
    public int Order => DataSeederOrder.TimeZones;

    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var command = new ImportTimeZonesCommand();

        await handler.HandleAsync(
            command,
            cancellationToken);
    }
}
