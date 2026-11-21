using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Languages;

public static class LanguagesLookup
{
    public static IReadOnlyCollection<LookupSeed> Languages { get; } =
    [
        new(
            Id: LanguagesIds.English,
            Name: "English",
            Code: "EN",
            SortOrder: 0),

        new(
            Id: LanguagesIds.Arabic,
            Name: "Arabic",
            Code: "AR",
            SortOrder: 1)
    ];
}
