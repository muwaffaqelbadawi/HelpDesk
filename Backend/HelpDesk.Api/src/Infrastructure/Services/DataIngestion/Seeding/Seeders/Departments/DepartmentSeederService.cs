using HelpDesk.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Registry;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Departments;

public sealed class DepartmentSeederService(
    AppDbContext dbContext,
    ILookupNormalizer normalizer,
    IDateTimeService dateTimeService,
    ILogger<DepartmentSeederService> logger) : ISeederService
{
    // Schema: Business
    public int Order => DataSeederOrder.Business;

    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var identity = SeedRegistry.Departments;

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

        // AddRange(new Departments)
        foreach (var seed in DepartmentsLookup.Departments)
        {
            var normalizedName =
                normalizer.NormalizeName(seed.Name);

            // Load existing Departments into Dictionary
            var existingDepartments = await dbContext.Departments
                .ToDictionaryAsync(
                    x => x.Code,
                    cancellationToken);

            if (!existingDepartments.TryGetValue(seed.Code, out var existing))
            {
                dbContext.Departments.Add(
                    new Department
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
