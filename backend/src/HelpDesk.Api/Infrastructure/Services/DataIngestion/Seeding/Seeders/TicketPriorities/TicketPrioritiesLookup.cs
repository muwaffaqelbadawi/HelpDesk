using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketPriorities;

public static class TicketPrioritiesLookup
{
    public static IReadOnlyCollection<LookupSeed> Priorities { get; } =
    [
        new(
            Id: TicketPriorityIds.Low,
            Name: "Low",
            Code: "LOW"),

        new(
            Id: TicketPriorityIds.Medium,
            Name: "Medium",
            Code: "MEDIUM"),

        new(
            Id: TicketPriorityIds.High,
            Name: "High",
            Code: "HIGH"),

        new(
            Id: TicketPriorityIds.Urgent,
            Name: "Urgent",
            Code: "URGENT"),

        new(
            Id: TicketPriorityIds.Critical,
            Name: "Critical",
            Code: "CRITICAL"),
    ];
}
