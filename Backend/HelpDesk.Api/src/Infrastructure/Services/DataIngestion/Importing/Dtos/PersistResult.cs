namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Dtos;

public sealed record PersistResult(
    int ProcessedCount,
    int ImportedCount,
    int UpdatedCount,
    int SkippedCount,
    TimeSpan Duration);
