namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Modules;

public static class ModuleIds
{
    public static readonly Guid Auth =
        new("E6043E87-AB14-4F09-9518-51A4B3E07FA7");

    public static readonly Guid Settings =
        new("B48A566F-544D-41B3-B35E-DEC316963562");

    public static readonly Guid Tickets =
        new("1CB2F0A4-EB25-4CD3-93B4-B2513DF78143");

    public static readonly Guid Users =
        new("8F42D75F-423E-402D-B67E-568B97339A86");

    public static IReadOnlyCollection<Guid> All { get; } =
    [
        Auth,
        Settings,
        Tickets,
        Users,
    ];
}
