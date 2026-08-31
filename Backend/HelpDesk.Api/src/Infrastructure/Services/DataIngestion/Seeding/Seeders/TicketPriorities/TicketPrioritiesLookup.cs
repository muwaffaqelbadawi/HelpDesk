using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketPriorities;

public static class TicketPrioritiesLookup
{
    public static IReadOnlyCollection<LookupSeed> Priorities { get; } =
    [
        new(
            Id: TicketPriorityIds.Low,
            Name: "Low",
            Code: "LOW",
            SortOrder: 0),

        new(
            Id: TicketPriorityIds.Medium,
            Name: "Medium",
            Code: "MEDIUM",
            SortOrder: 1),

        new(
            Id: TicketPriorityIds.High,
            Name: "High",
            Code: "HIGH",
            SortOrder: 2),

        new(
            Id: TicketPriorityIds.Urgent,
            Name: "Urgent",
            Code: "URGENT",
            SortOrder: 3),

        new(
            Id: TicketPriorityIds.Critical,
            Name: "Critical",
            Code: "CRITICAL",
            SortOrder: 0),
    ];

    public static LookupSeed Low =>
        Priorities.Single(x => x.Id == TicketPriorityIds.Low);

    public static LookupSeed Medium =>
        Priorities.Single(x => x.Id == TicketPriorityIds.Medium);

    public static LookupSeed High =>
        Priorities.Single(x => x.Id == TicketPriorityIds.High);

    public static LookupSeed Urgent =>
        Priorities.Single(x => x.Id == TicketPriorityIds.Urgent);

    public static LookupSeed Critical =>
        Priorities.Single(x => x.Id == TicketPriorityIds.Critical);
}
