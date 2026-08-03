using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;

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
            Id: UserStatusIds.Inactive,
            Name: "Inactive",
            Code: "INACTIVE",
            SortOrder: 1),

        new(
            Id: UserStatusIds.Deleted,
            Name: "Deleted",
            Code: "DELETED",
            SortOrder: 2),
    ];

    public static LookupSeed Deleted =>
        Statuses.Single(x => x.Id == EmployeeStatusIds.Deleted);
}
