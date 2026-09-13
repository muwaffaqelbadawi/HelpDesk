using HelpDesk.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Registry;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Companies;

public sealed class CompanySeederService(
    AppDbContext dbContext,
    ILookupNormalizer normalizer,
    IDateTimeService dateTimeService,
    ILogger<CompanySeederService> logger) : ISeederService
{
    // Schema: Business
    public int Order => DataSeederOrder.Business;

    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var identity = SeedRegistry.Companies;

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

        // Load existing Companies into Dictionary
        var existingModules = await dbContext.Companies
            .ToDictionaryAsync(
                x => x.Code,
                cancellationToken);

        // AddRange(new Companies)
        foreach (var seed in CompaniesLookup.Companies)
        {
            var normalizedName = normalizer.NormalizeName(seed.Name);

            if (!existingModules.TryGetValue(seed.Code, out var existing))
            {
                dbContext.Companies.Add(
                    new Company
                    {
                        Id = seed.Id,
                        Code = seed.Code,
                        Name = seed.Name,
                        NormalizedName = normalizedName,
                        IsActive = seed.IsActive,
                        SortOrder = seed.SortOrder,
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
