using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketStatuses;

public static class TicketStatusesLookup
{
    public static IReadOnlyCollection<LookupSeed> Statuses { get; } =
    [
        new(
            Id: TicketStatusIds.Open,
            Name: "Open",
            Code: "OPEN"),

        new(
            Id: TicketStatusIds.Assigned,
            Name: "Assigned",
            Code: "ASSIGNED"),

        new(
            Id: TicketStatusIds.InProgress,
            Name: "InProgress",
            Code: "INPROGRESS"),

        new(
            Id: TicketStatusIds.Pending,
            Name: "Pending",
            Code: "PENDING"),

        new(
            Id: TicketStatusIds.Resolved,
            Name: "Resolved",
            Code: "RESOLVED"),

        new(
            Id: TicketStatusIds.Closed,
            Name: "Closed",
            Code: "CLOSED"),

        new(
            Id: TicketStatusIds.Cancelled,
            Name: "Cancelled",
            Code: "CANCELLED"),

        new(
            Id: TicketStatusIds.Deleted,
            Name: "Deleted",
            Code: "DELETED")
    ];
}
