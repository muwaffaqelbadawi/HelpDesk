using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;

public static class UserStatusLookup
{
    public static IReadOnlyCollection<LookupSeed> Statuses { get; } =
    [
        new(
            Id: UserStatusIds.Active,
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

        new(
            Id: UserStatusIds.Locked,
            Name: "Locked",
            Code: "LOCKED",
            SortOrder: 3),

        new(
            Id: UserStatusIds.Suspended,
            Name: "Suspended",
            Code: "SUSPENDED",
            SortOrder: 4),

        new(
            Id: UserStatusIds.OnLeave,
            Name: "OnLeave",
            Code: "ONLEAVE",
            SortOrder: 5),

        new(
            Id: UserStatusIds.Retired,
            Name: "Retired",
            Code: "RETIRED",
            SortOrder: 6),

        new(
            Id: UserStatusIds.Archived,
            Name: "Archived",
            Code: "ARCHIVED",
            SortOrder: 7)
    ];

    public static LookupSeed Deleted =>
        Statuses.Single(x => x.Id == UserStatusIds.Deleted);
}
