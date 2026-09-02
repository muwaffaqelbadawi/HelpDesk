using System.Text.Json;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Core;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Dtos;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Importers.Countries.ImportCountries;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Importers.Countries;

public sealed class CountryImporter
    : DataImporter<ImportCountriesSource, Country>,
      ICountryImporter
{
    private readonly AppDbContext _dbContext;
    private readonly IHostEnvironment _environment;
    private readonly DataImportOptions _options;

    public CountryImporter(
        AppDbContext dbContext,
        IHostEnvironment environment,
        IOptions<DataImportOptions> options)
    {
        _dbContext = dbContext;
        _environment = environment;
        _options = options.Value;
    }

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNameCaseInsensitive = true
    };

    protected override async Task<string> ReadSourceAsync(
        CancellationToken cancellationToken)
    {
        var snapshotPath = Path.GetFullPath(
            Path.Combine(
                _environment.ContentRootPath,
                _options.RelativePath));

        if (!File.Exists(snapshotPath))
        {
            throw new FileNotFoundException(
                "Country snapshot was not found.",
                snapshotPath);
        }

        return await File.ReadAllTextAsync(
            snapshotPath,
            cancellationToken);
    }

    protected override IReadOnlyCollection<ImportCountriesSource> Deserialize(
        string source)
    {
        return JsonSerializer.Deserialize<List<ImportCountriesSource>>(
                source,
                JsonOptions)
            ?? throw new InvalidOperationException(
                "Country snapshot contains no valid JSON data.");
    }

    protected override void Validate(
        IReadOnlyCollection<ImportCountriesSource> records)
    {
        if (records.Count == 0)
        {
            throw new InvalidOperationException(
                "Country snapshot contains no records.");
        }

        if (records.Any(x =>
            string.IsNullOrWhiteSpace(x.M49Code.ToString()) ||
            string.IsNullOrWhiteSpace(x.Alpha2) ||
            string.IsNullOrWhiteSpace(x.Alpha3) ||
            string.IsNullOrWhiteSpace(x.Name) ||
            string.IsNullOrWhiteSpace(x.NameArabic)))
        {
            throw new InvalidOperationException(
                "Country snapshot contains records with missing required fields.");
        }

        if (records.GroupBy(x => x.M49Code).Any(x => x.Count() > 1))
        {
            throw new InvalidOperationException(
                "Country snapshot contains duplicate M49 codes.");
        }

        if (records
            .GroupBy(x => x.Alpha2, StringComparer.OrdinalIgnoreCase)
            .Any(x => x.Count() > 1))
        {
            throw new InvalidOperationException(
                "Country snapshot contains duplicate ISO alpha-2 codes.");
        }

        if (records
            .GroupBy(x => x.Alpha3, StringComparer.OrdinalIgnoreCase)
            .Any(x => x.Count() > 1))
        {
            throw new InvalidOperationException(
                "Country snapshot contains duplicate ISO alpha-3 codes.");
        }
    }

    protected override IReadOnlyCollection<Country> Map(
        IReadOnlyCollection<ImportCountriesSource> records)
    {
        return records
            .Select(x => new Country
            {
                M49Code = x.M49Code.ToString("D3"),
                Alpha2Code = x.Alpha2.ToUpperInvariant(),
                Alpha3Code = x.Alpha3.ToUpperInvariant(),
                Name = x.Name,
                NameArabic = x.NameArabic,
                IsActive = true
            })
            .ToList();
    }

    protected override async Task<PersistResult> PersistAsync(
        IReadOnlyCollection<Country> entities,
        CancellationToken cancellationToken)
    {
        var importedCount = 0;
        var updatedCount = 0;
        var skippedCount = 0;

        var existingCountries = await _dbContext.Countries
            .ToDictionaryAsync(
                x => x.M49Code,
                cancellationToken);

        foreach (var entity in entities)
        {
            if (!existingCountries.TryGetValue(entity.M49Code, out var existing))
            {
                _dbContext.Countries.Add(entity);

                importedCount++;

                continue;
            }

            if (existing is null)
            {
                _dbContext.Countries.Add(entity);

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
            importedCount,
            updatedCount,
            skippedCount);
    }

    private static void Update(Country existing, Country entity)
    {
        existing.Alpha2Code = entity.Alpha2Code;
        existing.Alpha3Code = entity.Alpha3Code;
        existing.Name = entity.Name;
        existing.NameArabic = entity.NameArabic;
        existing.IsActive = entity.IsActive;
    }

    private static bool HasChanges(Country existing, Country entity)
    {
        return existing.Alpha2Code != entity.Alpha2Code
            || existing.Alpha3Code != entity.Alpha3Code
            || existing.Name != entity.Name
            || existing.NameArabic != entity.NameArabic
            || existing.IsActive != entity.IsActive;
    }
}
