namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Permissions;

public static class PermissionIds
{
    // 5 permissions

    public static readonly Guid View =
        new("EDDFA767-AFF5-400F-8134-33252E2CB3C2");

    public static readonly Guid Create =
        new("D8EBC6F4-91E3-41D1-8301-8DC53A58AEC5");

    public static readonly Guid Update =
        new("4530F2EF-4C38-4C7A-8ED2-36A0A5A2B87A");

    public static readonly Guid Delete =
        new("D055A3CF-3816-4737-8DAA-C83AEA6FDD69");

    public static readonly Guid Assign =
        new("F881D759-779E-4BED-8B20-8F68181B55C6");

    public static IReadOnlyCollection<Guid> All { get; } =
    [
        View,
        Create,
        Update,
        Delete,
        Assign
    ];
}
