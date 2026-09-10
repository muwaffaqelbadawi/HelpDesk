using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Companies;

public static class CompaniesLookup
{
    public static IReadOnlyCollection<LookupSeed> Companies { get; } =
    [
        new(
            Id: CompaniesIds.SiragFutureTechnology,
            Name: "Sirag Future Technology",
            Code: "SFTech",
            SortOrder: 0)
    ];
}
