using HelpDesk.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Registry;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.RolePermissionModules;

public sealed class RolePermissionModulesSeederService(
    AppDbContext dbContext,
    IDateTimeService dateTimeService,
    ILogger<RolePermissionModulesSeederService> logger) : IDataSeeder
{
    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var identity = SeedRegistry.RolePermissionModules;

        var key = identity.Key; ;
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

        // Load existing entities into Dictionary
        var existingMappings = await dbContext.RolePermissionModules
            .ToDictionaryAsync(
               x => (
                x.RoleId,
                x.PermissionId,
                x.ModuleId),
                cancellationToken);

        // AddRange(new entities)
        foreach (var seed in RolePermissionModulesLookup.Maps)
        {
            var primaryKey = (
                seed.RoleId,
                seed.PermissionId,
                seed.ModuleId);

            if (!existingMappings.ContainsKey(primaryKey))
            {
                dbContext.RolePermissionModules.Add(
                   new ApplicationRolePermissionModule
                   {
                       RoleId = seed.RoleId,
                       PermissionId = seed.PermissionId,
                       ModuleId = seed.ModuleId
                   });
            }
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
