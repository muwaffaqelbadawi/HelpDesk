using HelpDesk.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Registry;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.RolePermissionModules;

public sealed class RolePermissionModulesSeederService : IDataSeeder
{
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<RolePermissionModulesSeederService> _logger;

    public RolePermissionModulesSeederService(
         AppDbContext dbContext,
         IDateTimeService dateTimeService,
         ILogger<RolePermissionModulesSeederService> logger)
    {
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var identity = SeedRegistry.RolePermissionModules;

        var key = identity.Key; ;
        var version = identity.Version;
        var scope = identity.Scope;

        // Check SeedHistory
        var exists = await _dbContext.SeedHistories
            .AnyAsync(e =>
                e.Key == key &&
                e.Version == version &&
                e.Scope == scope,
                cancellationToken);

        if (exists)
        {
            // Log (1)
            _logger.SeedAlreadyApplied(key, scope, version);

            return;
        }

        // Log (2)
        _logger.ApplyingSeed(key, scope, version);

        // Load existing entities into Dictionary
        var existingMappings = await _dbContext.RolePermissionModules
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
                _dbContext.RolePermissionModules.Add(
                   new ApplicationRolePermissionModule
                   {
                       RoleId = seed.RoleId,
                       PermissionId = seed.PermissionId,
                       ModuleId = seed.ModuleId
                   });
            }
        }

        // Add SeedHistory
        _dbContext.SeedHistories.Add(
            new SeedHistory
            {
                Key = key,
                Version = version,
                Scope = scope,
                AppliedAt = _dateTimeService.UtcNow
            });

        // Log (3)
        _logger.SeedApplied(key, scope, version);

        // SaveChanges once
        await _dbContext.SaveChangesAsync(cancellationToken);
    }
}
