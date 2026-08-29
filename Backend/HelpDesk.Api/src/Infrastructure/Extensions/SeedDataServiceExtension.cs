using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class SeedDataServiceExtension
{
    public static async Task<WebApplication> SeedDatabaseAsync(
        this WebApplication app,
        CancellationToken cancellationToken = default)
    {
        using var scope = app.Services.CreateScope();

        var seeder = scope.ServiceProvider.GetRequiredService<ILookupSeederRunner>();

        await seeder.SeedAsync(cancellationToken);

        return app;
    }
}
