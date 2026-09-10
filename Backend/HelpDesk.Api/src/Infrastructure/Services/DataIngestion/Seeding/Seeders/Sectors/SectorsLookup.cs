using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Sectors;

public static class SectorsLookup
{
    public static IReadOnlyCollection<LookupSeed> Sectors { get; } =
    [
        new(
            Id: SectorsIds.Technology,
            Name: "Technology",
            Code: "TECH",
            SortOrder: 0),

        new(
            Id: SectorsIds.Operations,
            Name: "Operations",
            Code: "OPS",
            SortOrder: 1),

        new(
            Id: SectorsIds.Finance,
            Name: "Finance",
            Code: "FIN",
            SortOrder: 2),

        new(
            Id: SectorsIds.HumanResources,
            Name: "Human Resources",
            Code: "HR",
            SortOrder: 3),

        new(
            Id: SectorsIds.Administration,
            Name: "Administration",
            Code: "ADM",
            SortOrder: 4),
    ];
}
