using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Sectors;

public static class SectorsLookup
{
    public static IReadOnlyCollection<LookupSeed> Sectors { get; } =
    [
        new(
            Id: SectorsIds.Technology,
            Name: "Technology",
            Code: "TECH"),

        new(
            Id: SectorsIds.Operations,
            Name: "Operations",
            Code: "OPS"),

        new(
            Id: SectorsIds.Finance,
            Name: "Finance",
            Code: "FIN"),

        new(
            Id: SectorsIds.HumanResources,
            Name: "Human Resources",
            Code: "HR"),

        new(
            Id: SectorsIds.Administration,
            Name: "Administration",
            Code: "ADM"),
    ];
}
