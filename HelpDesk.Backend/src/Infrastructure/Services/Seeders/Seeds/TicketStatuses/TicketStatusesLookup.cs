using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketStatuses;

public static class TicketStatusesLookup
{
    public static IReadOnlyCollection<LookupSeed> Statuses { get; } =
    [
        new(
            Id: TicketStatusIds.Open,
            Name: "Open",
            Code: "OPEN",
            SortOrder: 0),

        new(
            Id: TicketStatusIds.Assigned,
            Name: "Assigned",
            Code: "ASSIGNED",
            SortOrder: 1),

        new(
            Id: TicketStatusIds.InProgress,
            Name: "InProgress",
            Code: "INPROGRESS",
            SortOrder: 2),

        new(
            Id: TicketStatusIds.Pending,
            Name: "Pending",
            Code: "PENDING",
            SortOrder: 3),

        new(
            Id: TicketStatusIds.Resolved,
            Name: "Resolved",
            Code: "RESOLVED",
            SortOrder: 4),

        new(
            Id: TicketStatusIds.Closed,
            Name: "Closed",
            Code: "CLOSED",
            SortOrder: 5),

        new(
            Id: TicketStatusIds.Cancelled,
            Name: "Cancelled",
            Code: "CANCELLED",
            SortOrder: 6),

        new(
            Id: TicketStatusIds.Deleted,
            Name: "Deleted",
            Code: "DELETED",
            SortOrder: 7)
    ];

    public static LookupSeed Open =>
        Statuses.Single(x => x.Id == TicketStatusIds.Open);

    public static LookupSeed Assigned =>
        Statuses.Single(x => x.Id == TicketStatusIds.Assigned);

    public static LookupSeed InProgress =>
        Statuses.Single(x => x.Id == TicketStatusIds.InProgress);

    public static LookupSeed Pending =>
        Statuses.Single(x => x.Id == TicketStatusIds.Pending);

    public static LookupSeed Resolved =>
        Statuses.Single(x => x.Id == TicketStatusIds.Resolved);

    public static LookupSeed Closed =>
        Statuses.Single(x => x.Id == TicketStatusIds.Closed);

    public static LookupSeed Cancelled =>
        Statuses.Single(x => x.Id == TicketStatusIds.Cancelled);
}
