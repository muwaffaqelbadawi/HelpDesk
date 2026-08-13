using HelpDesk.src.Infrastructure.Database.DbContext;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class MigrationServiceExtension
{
    public static async Task<WebApplication> ApplyMigrationsAsync(
        this WebApplication app,
        CancellationToken cancellationToken = default)
    {
        using var scope = app.Services.CreateScope();

        var logger = scope.ServiceProvider
                    .GetRequiredService<ILogger<AppDbContext>>();

        var dbContext = scope.ServiceProvider
            .GetRequiredService<AppDbContext>();

        logger.LogInformation("Applying database migrations...");

        await dbContext.Database.MigrateAsync(cancellationToken);

        return app;
    }
}
