using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;

public static class UserStatusLookup
{
    public static IReadOnlyCollection<LookupSeed> Statuses { get; } =
    [
        new(
            Id: UserStatusIds.Active,
            Name: "Active",
            Code: "ACTIVE"),

        new(
            Id: UserStatusIds.Inactive,
            Name: "Inactive",
            Code: "INACTIVE"),

        new(
            Id: UserStatusIds.Deleted,
            Name: "Deleted",
            Code: "DELETED"),

        new(
            Id: UserStatusIds.Locked,
            Name: "Locked",
            Code: "LOCKED"),

        new(
            Id: UserStatusIds.Suspended,
            Name: "Suspended",
            Code: "SUSPENDED"),

        new(
            Id: UserStatusIds.OnLeave,
            Name: "OnLeave",
            Code: "ONLEAVE"),

        new(
            Id: UserStatusIds.Retired,
            Name: "Retired",
            Code: "RETIRED"),

        new(
            Id: UserStatusIds.Archived,
            Name: "Archived",
            Code: "ARCHIVED")
    ];
}
