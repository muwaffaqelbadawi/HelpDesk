namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;

public sealed record LookupSeed(
    Guid Id,
    string Name,
    string Code,
    bool IsActive = true);
