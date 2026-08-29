using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.EmployeeStatuses;

public static class EmployeeStatusLookup
{
    public static IReadOnlyCollection<LookupSeed> Statuses { get; } =
    [
        new(
            Id: EmployeeStatusIds.Active,
            Name: "Active",
            Code: "ACTIVE",
            SortOrder: 0),

        new(
            Id: EmployeeStatusIds.Inactive,
            Name: "Inactive",
            Code: "INACTIVE",
            SortOrder: 1),

        new(
            Id: EmployeeStatusIds.Deleted,
            Name: "Deleted",
            Code: "DELETED",
            SortOrder: 2),

        new(
            Id: EmployeeStatusIds.Locked,
            Name: "Locked",
            Code: "LOCKED",
            SortOrder: 3),

        new(
            Id: EmployeeStatusIds.Suspended,
            Name: "Suspended",
            Code: "SUSPENDED",
            SortOrder: 4),

        new(
            Id: EmployeeStatusIds.OnLeave,
            Name: "OnLeave",
            Code: "ONLEAVE",
            SortOrder: 5),

        new(
            Id: EmployeeStatusIds.Retired,
            Name: "Retired",
            Code: "RETIRED",
            SortOrder: 6),

        new(
            Id: EmployeeStatusIds.Archived,
            Name: "Archived",
            Code: "ARCHIVED",
            SortOrder: 7)
    ];

    public static LookupSeed Deleted =>
        Statuses.Single(x => x.Id == EmployeeStatusIds.Deleted);
}
