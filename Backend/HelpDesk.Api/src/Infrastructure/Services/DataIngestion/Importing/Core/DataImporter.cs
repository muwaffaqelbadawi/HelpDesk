using System.Diagnostics;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Dtos;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Core;

public abstract class DataImporter<TSource, TEntity>
{
    public async Task<ImportResult> ImportAsync(
        CancellationToken cancellationToken = default)
    {
        var stopwatch = Stopwatch.StartNew();

        var source = await ReadSourceAsync(cancellationToken);

        var records = Deserialize(source);

        Validate(records);

        var entities = Map(records);

        var result = await PersistAsync(
            entities,
            cancellationToken);

        stopwatch.Stop();

        return new ImportResult(
            ProcessedCount: records.Count,
            ImportedCount: result.ImportedCount,
            UpdatedCount: result.UpdatedCount,
            SkippedCount: result.SkippedCount,
            Duration: stopwatch.Elapsed);
    }

    protected abstract Task<string> ReadSourceAsync(
        CancellationToken cancellationToken);

    protected abstract IReadOnlyCollection<TSource> Deserialize(
        string source);

    protected abstract void Validate(
        IReadOnlyCollection<TSource> records);

    protected abstract IReadOnlyCollection<TEntity> Map(
        IReadOnlyCollection<TSource> records);

    protected abstract Task<PersistResult> PersistAsync(
        IReadOnlyCollection<TEntity> entities,
        CancellationToken cancellationToken);
}
