using HelpDesk.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Registry;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Permissions;

public sealed class PermissionSeederService : IDataSeeder
{
    private readonly AppDbContext _dbContext;
    private readonly ILookupNormalizer _normalizer;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<PermissionSeederService> _logger;

    public PermissionSeederService(
        AppDbContext dbContext,
        ILookupNormalizer normalizer,
        IDateTimeService dateTimeService,
        ILogger<PermissionSeederService> logger)
    {
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _normalizer = normalizer;
        _logger = logger;
    }

    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var identity = SeedRegistry.Permissions;

        var key = identity.Key;
        var version = identity.Version;
        var scope = identity.Scope;

        // 1- Check SeedHistory
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
        var existingPermissions = await _dbContext.Permissions
            .ToDictionaryAsync(
                x => x.Code,
                cancellationToken);

        // AddRange(new entities)
        foreach (var seed in PermissionsLookup.Permissions)
        {
            var normalizedName = _normalizer.NormalizeName(seed.Name);

            if (!existingPermissions.TryGetValue(seed.Code, out var existing))
            {
                // Insert/Populate
                _dbContext.Permissions.Add(
                   new ApplicationPermission
                   {
                       Id = seed.Id,
                       Name = seed.Name,
                       NormalizedName = normalizedName,
                       Code = seed.Code,
                       IsActive = seed.IsActive,
                       SortOrder = seed.SortOrder
                   });

                continue;
            }

            // Update
            existing.Name = seed.Name;
            existing.NormalizedName = normalizedName;
            existing.IsActive = seed.IsActive;
            existing.SortOrder = seed.SortOrder;
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
