namespace HelpDesk.src.Infrastructure.Extensions;

public static class InitializeDatabaseExtension
{
    public static async Task<WebApplication> InitializeDatabaseAsync(
        this WebApplication app,
        CancellationToken cancellationToken = default)
    {
        await app.ApplyMigrationsAsync(cancellationToken);
        await app.SeedDatabaseAsync(cancellationToken);
        await app.SeedAdminAsync(cancellationToken);

        return app;
    }
}
