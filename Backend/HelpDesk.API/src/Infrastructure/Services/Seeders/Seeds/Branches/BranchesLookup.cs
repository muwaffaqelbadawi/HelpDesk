using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Branches;

public static class BranchesLookup
{
    public static IReadOnlyCollection<LookupSeed> Branches { get; } =
    [
        new(
            Id: BranchesIds.Madinah,
            Name: "Madinah",
            Code: "MED",
            SortOrder: 0),

        new(
            Id: BranchesIds.Riyadh,
            Name: "Riyadh",
            Code: "RUH",
            SortOrder: 1),

        new(
            Id: BranchesIds.Jeddah,
            Name: "Jeddah",
            Code: "JED",
            SortOrder: 2),

        new(
            Id: BranchesIds.Dammam,
            Name: "Dammam",
            Code: "DAM",
            SortOrder: 3),

        new(
            Id: BranchesIds.Makkah,
            Name: "Makkah",
            Code: "MKK",
            SortOrder: 4),

        new(
            Id: BranchesIds.Tabuk,
            Name: "Tabuk",
            Code: "TAB",
            SortOrder: 5),

        new(
            Id: BranchesIds.Abha,
            Name: "Abha",
            Code: "ABH",
            SortOrder: 6),

        new(
            Id: BranchesIds.Qassim,
            Name: "Qassim",
            Code: "QSM",
            SortOrder: 7),

        new(
            Id: BranchesIds.Jizan,
            Name: "Jizan",
            Code: "JZN",
            SortOrder: 8),

        new(
            Id: BranchesIds.AlAhsa,
            Name: "AlAhsa",
            Code: "HOF",
            SortOrder: 9),
    ];
}
