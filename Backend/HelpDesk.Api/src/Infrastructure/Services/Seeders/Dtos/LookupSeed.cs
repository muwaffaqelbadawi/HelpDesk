namespace HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

public sealed record LookupSeed(
    Guid Id,
    string Name,
    string Code,
    bool IsActive = true,
    int SortOrder = 0);
