using HelpDesk.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.Seeders.Registry;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Departments;

public sealed class DepartmentSeederService : IDataSeeder
{
    private readonly AppDbContext _dbContext;
    private readonly ILookupNormalizer _normalizer;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<DepartmentSeederService> _logger;

    public DepartmentSeederService(
        AppDbContext dbContext,
        ILookupNormalizer normalizer,
        IDateTimeService dateTimeService,
        ILogger<DepartmentSeederService> logger)
    {
        _dbContext = dbContext;
        _normalizer = normalizer;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task SeedAsync(
        CancellationToken cancellationToken = default)
    {
        var identity = SeedRegistry.Departments;

        var key = identity.Key;
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
            _logger.SeedAlreadyApplied(key, version, scope);

            return;
        }

        // Log (2)
        _logger.ApplyingSeed(key, version, scope);

        // AddRange(new Departments)
        foreach (var seed in DepartmentsLookup.Departments)
        {
            var normalizedName =
                _normalizer.NormalizeName(seed.Name);

            // Load existing Departments into Dictionary
            var existingDepartments = await _dbContext.Departments
                .ToDictionaryAsync(
                    x => x.Code,
                    cancellationToken);

            if (!existingDepartments.TryGetValue(seed.Code, out var existing))
            {
                _dbContext.Departments.Add(
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
        _dbContext.SeedHistories.Add(
            new SeedHistory
            {
                Key = key,
                Version = version,
                Scope = scope,
                AppliedAt = _dateTimeService.UtcNow
            });

        // Log (3)
        _logger.SeedApplied(key, version, scope);

        // SaveChanges once
        await _dbContext.SaveChangesAsync(cancellationToken);
    }
}

