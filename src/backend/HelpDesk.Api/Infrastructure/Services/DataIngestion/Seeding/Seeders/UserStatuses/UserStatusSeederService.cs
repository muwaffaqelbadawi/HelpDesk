using HelpDesk.Infrastructure.Logging;
using HelpDesk.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.Infrastructure.Database.DbContext;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Registry;
using HelpDesk.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;

public sealed class UserStatusSeederService(
    AppDbContext dbContext,
    ILookupNormalizer normalizer,
    IDateTimeService dateTimeService,
    ILogger<UserStatusSeederService> logger) : ISeederService
{
    // Schema: Auth
    public int Order => DataSeederOrder.Auth;

    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var identity = SeedRegistry.UserStatuses;

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

        // Load existing entities into Dictionary
        var existingStatuses = await dbContext.UserStatuses
            .ToDictionaryAsync(
                x => x.Code,
                cancellationToken);

        // AddRange(new entities)
        foreach (var seed in UserStatusLookup.Statuses)
        {
            var normalizedName = normalizer.NormalizeName(seed.Name);

            if (!existingStatuses.TryGetValue(seed.Code, out var existing))
            {
                dbContext.UserStatuses.Add(
                new ApplicationUserStatus
                {
                    Id = seed.Id,
                    Code = seed.Code,
                    Name = seed.Name,
                    NormalizedName = normalizedName,
                    IsActive = seed.IsActive,
                });

                continue;
            }

            // Update
            existing.Name = seed.Name;
            existing.NormalizedName = normalizedName;
            existing.IsActive = seed.IsActive;
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
