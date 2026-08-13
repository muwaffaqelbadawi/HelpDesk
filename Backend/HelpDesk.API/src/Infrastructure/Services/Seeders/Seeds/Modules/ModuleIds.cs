namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Modules;

public static class ModuleIds
{
    // 6 Modules

    public static readonly Guid Users =
        new("8F42D75F-423E-402D-B67E-568B97339A86");

    public static readonly Guid Roles =
        new("4692F230-B449-4415-96E4-CDF072994D07");

    public static readonly Guid Permissions =
        new("65E05C0D-4DCE-4E8F-BFB7-664D146E9A08");

    public static readonly Guid Modules =
        new("28CB36B2-1B12-40D3-BBA3-5DC5F12B562E");

    public static readonly Guid Tickets =
        new("1CB2F0A4-EB25-4CD3-93B4-B2513DF78143");

    public static readonly Guid Employees =
        new("6352FB5C-A55F-4F73-BB1A-9B3BA9E90B7B");

    public static IReadOnlyCollection<Guid> All { get; } =
    [
        Users,
        Roles,
        Permissions,
        Modules,
        Tickets,
        Employees
    ];
}
