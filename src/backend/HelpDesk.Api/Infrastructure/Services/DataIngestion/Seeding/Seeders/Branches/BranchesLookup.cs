using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.Branches;

public static class BranchesLookup
{
    public static IReadOnlyCollection<LookupSeed> Branches { get; } =
    [
        new(
            Id: BranchesIds.Madinah,
            Name: "Madinah",
            Code: "MED"),

        new(
            Id: BranchesIds.Riyadh,
            Name: "Riyadh",
            Code: "RUH"),

        new(
            Id: BranchesIds.Jeddah,
            Name: "Jeddah",
            Code: "JED"),

        new(
            Id: BranchesIds.Dammam,
            Name: "Dammam",
            Code: "DAM"),

        new(
            Id: BranchesIds.Makkah,
            Name: "Makkah",
            Code: "MKK"),

        new(
            Id: BranchesIds.Tabuk,
            Name: "Tabuk",
            Code: "TAB"),

        new(
            Id: BranchesIds.Abha,
            Name: "Abha",
            Code: "ABH"),

        new(
            Id: BranchesIds.Qassim,
            Name: "Qassim",
            Code: "QSM"),

        new(
            Id: BranchesIds.Jizan,
            Name: "Jizan",
            Code: "JZN"),

        new(
            Id: BranchesIds.AlAhsa,
            Name: "AlAhsa",
            Code: "HOF"),
    ];
}
