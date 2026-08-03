namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Modules;

public static class ModuleIds
{
    public static readonly Guid Dashboard =
        new("4692F230-B449-4415-96E4-CDF072994D07");

    public static readonly Guid Users =
        new("8F42D75F-423E-402D-B67E-568B97339A86");

    public static readonly Guid Tickets =
        new("1CB2F0A4-EB25-4CD3-93B4-B2513DF78143");

    public static readonly Guid Reports =
    new("6352FB5C-A55F-4F73-BB1A-9B3BA9E90B7B");

    public static readonly Guid Notifications =
        new("449B6E1C-1EE3-4103-AF1A-D387501899C7");

    public static readonly Guid Settings =
       new("C6506369-BBE3-492F-BED6-20129808CBE9");

    public static IReadOnlyCollection<Guid> All { get; } =
    [
        Dashboard,
        Users,
        Tickets,
        Reports,
        Notifications,
        Settings,
    ];
}
