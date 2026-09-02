namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Dtos;

public sealed record PersistResult(
    int ImportedCount,
    int UpdatedCount,
    int SkippedCount);
