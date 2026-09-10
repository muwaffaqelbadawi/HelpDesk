using HelpDesk.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Registry;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Modules;

public sealed class ModuleSeederService(
    AppDbContext dbContext,
    ILookupNormalizer normalizer,
    IDateTimeService dateTimeService,
    ILogger<ModuleSeederService> logger) : IDataSeeder
{
    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var identity = SeedRegistry.Modules;

        var key = identity.Key;
        var version = identity.Version;
        var scope = identity.Scope;

        // Check SeedHistory
        var exists = await dbContext.SeedHistories
            .AnyAsync(e =>
                e.Key == key &&
                e.Version == version &&
                e.Scope == scope,
                cancellationToken);

        if (exists)
        {
            // Log (1)
            logger.SeedAlreadyApplied(
                key: key,
                scope: scope,
                version: version);

            return;
        }

        // Log (2)
        logger.ApplyingSeed(
            key: key,
            scope: scope,
            version: version);

        // Load existing modules into Dictionary
        var existingModules = await dbContext.Modules
            .ToDictionaryAsync(
                x => x.Code,
                cancellationToken);

        // AddRange(new modules)
        foreach (var seed in ModulesLookup.Modules)
        {
            var normalizedName =
            normalizer.NormalizeName(seed.Name);

            if (!existingModules.TryGetValue(seed.Code, out var existing))
            {
                dbContext.Modules.Add(
                    new ApplicationModule
                    {
                        Id = seed.Id,
                        Code = seed.Code,
                        Name = seed.Name,
                        NormalizedName = normalizedName,
                        IsActive = seed.IsActive,
                        SortOrder = seed.SortOrder
                    });

                continue;
            }

            existing.Name = seed.Name;
            existing.NormalizedName = normalizedName;
            existing.IsActive = seed.IsActive;
            existing.SortOrder = seed.SortOrder;
        }

        // Add SeedHistory
        dbContext.SeedHistories.Add(
            new SeedHistory
            {
                Key = key,
                Version = version,
                Scope = scope,
                AppliedAt = dateTimeService.UtcNow
            });

        // Log (3)
        logger.SeedApplied(
            key: key,
            scope: scope,
            version: version);

        // SaveChanges once
        await dbContext.SaveChangesAsync(cancellationToken);
    }
}
