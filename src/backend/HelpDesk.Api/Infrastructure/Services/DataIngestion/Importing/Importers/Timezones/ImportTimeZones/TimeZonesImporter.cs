using System.Text.Json;
using HelpDesk.Infrastructure.Database.DbContext;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Infrastructure.Services.DataIngestion.Importing.Core;
using HelpDesk.Infrastructure.Services.DataIngestion.Importing.Dtos;
using HelpDesk.Infrastructure.Services.DataIngestion.Importing.Importers.TimeZones.data;
using HelpDesk.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Importing.Importers.TimeZones.ImportTimeZones;

public sealed class TimeZonesImporter
    : DataImporter<string, ApplicationTimeZone>,
      ITimeZonesImporter
{
    private readonly AppDbContext _dbContext;
    private readonly IHostEnvironment _environment;
    private readonly TimeZonesImportOptions _options;

    public TimeZonesImporter(
        AppDbContext dbContext,
        IHostEnvironment environment,
        IOptions<TimeZonesImportOptions> options)
    {
        _dbContext = dbContext;
        _environment = environment;
        _options = options.Value;
    }

    protected override async Task<string> ReadSourceAsync(
        CancellationToken cancellationToken)
    {
        var snapshotPath = Path.GetFullPath(
            Path.Combine(
                _environment.ContentRootPath,
                _options.TimeZonesPath));

        if (!File.Exists(snapshotPath))
        {
            throw new FileNotFoundException(
                "Time zone snapshot was not found.",
                snapshotPath);
        }

        return await File.ReadAllTextAsync(
            snapshotPath,
            cancellationToken);
    }

    protected override IReadOnlyCollection<string> Deserialize(
        string source)
    {
        return JsonSerializer.Deserialize<List<string>>(source)
            ?? throw new InvalidOperationException(
                "Time zone snapshot contains no valid JSON data.");
    }

    protected override void Validate(
        IReadOnlyCollection<string> records)
    {
        if (records.Count == 0)
        {
            throw new InvalidOperationException(
                "Time zone snapshot contains no records.");
        }

        if (records.Any(string.IsNullOrWhiteSpace))
        {
            throw new InvalidOperationException(
                "Time zone snapshot contains records with missing names.");
        }
    }

    protected override IReadOnlyCollection<ApplicationTimeZone> Map(
        IReadOnlyCollection<string> records)
    {
        return records
            .Select(name => new ApplicationTimeZone
            {
                Name = name,
                Release = ReleaseList.Current,
                IsActive = true
            })
            .ToList();
    }

    protected override async Task<PersistResult> PersistAsync(
        IReadOnlyCollection<ApplicationTimeZone> entities,
        CancellationToken cancellationToken)
    {
        var processedCount = entities.Count;
        var importedCount = 0;
        var updatedCount = 0;
        var skippedCount = 0;
        var duration = TimeSpan.Zero;

        var existingTimeZones = await EntityFrameworkQueryableExtensions.ToDictionaryAsync(
            _dbContext.TimeZones,
                x => x.Name,
                x => x,
                cancellationToken);

        foreach (var entity in entities)
        {
            if (!existingTimeZones.TryGetValue(entity.Name, out var existing))
            {
                _dbContext.TimeZones.Add(entity);

                importedCount++;

                continue;
            }

            if (HasChanges(existing, entity))
            {
                Update(existing, entity);

                updatedCount++;

                continue;
            }

            skippedCount++;
        }

        await _dbContext.SaveChangesAsync(cancellationToken);

        return new PersistResult(
            processedCount,
            importedCount,
            updatedCount,
            skippedCount,
            duration);
    }

    private static void Update(ApplicationTimeZone existing, ApplicationTimeZone entity)
    {
        existing.Name = entity.Name;
        existing.Release = entity.Release;
        existing.IsActive = entity.IsActive;
    }

    private static bool HasChanges(ApplicationTimeZone existing, ApplicationTimeZone entity)
    {
        return existing.Name != entity.Name ||
               existing.Release != entity.Release ||
               existing.IsActive != entity.IsActive;
    }
}
