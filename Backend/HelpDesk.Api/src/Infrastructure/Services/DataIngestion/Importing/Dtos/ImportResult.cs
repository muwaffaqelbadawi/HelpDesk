namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Dtos;

public sealed record ImportResult(
    int ProcessedCount,
    int ImportedCount,
    int UpdatedCount,
    int SkippedCount,
    TimeSpan Duration);
