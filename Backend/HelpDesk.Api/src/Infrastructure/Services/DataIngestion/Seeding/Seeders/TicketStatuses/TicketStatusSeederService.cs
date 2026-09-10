using HelpDesk.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Registry;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketStatuses;

public sealed class TicketStatusSeederService(
    AppDbContext dbContext,
    IDateTimeService dateTimeService,
    ILookupNormalizer normalizer,
    ILogger<TicketStatusSeederService> logger) : IDataSeeder
{
    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var identity = SeedRegistry.TicketStatuses;

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
        var existingStatuses = await dbContext.TicketStatuses
            .ToDictionaryAsync(
                x => x.Code,
                cancellationToken);

        // AddRange(new entities) 
        foreach (var seed in TicketStatusesLookup.Statuses)
        {
            var normalizedName = normalizer.NormalizeName(seed.Name);

            if (!existingStatuses.TryGetValue(seed.Code, out var existing))
            {
                // INSERT
                dbContext.TicketStatuses.Add(
                    new TicketStatus
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

            // Update
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
