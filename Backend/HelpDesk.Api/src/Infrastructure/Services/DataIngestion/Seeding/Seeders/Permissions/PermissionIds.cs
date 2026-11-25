namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Permissions;

public static class PermissionIds
{
    public static readonly Guid View =
        new("EDDFA767-AFF5-400F-8134-33252E2CB3C2");

    public static readonly Guid Create =
        new("D8EBC6F4-91E3-41D1-8301-8DC53A58AEC5");

    public static readonly Guid Set =
        new("ABE47EA3-CD04-41D5-8198-5CF22CEB1C95");

    public static readonly Guid Update =
        new("4530F2EF-4C38-4C7A-8ED2-36A0A5A2B87A");

    public static readonly Guid Delete =
        new("D055A3CF-3816-4737-8DAA-C83AEA6FDD69");

    public static readonly Guid Assign =
        new("F881D759-779E-4BED-8B20-8F68181B55C6");

    public static readonly Guid Assigned =
        new("CECFA831-18ED-497D-8D88-55DA695004D0");

    public static readonly Guid Reset =
        new("20C8EB43-F8DB-40E6-892D-06501402F2EA");

    public static readonly Guid Change =
        new("A2A15015-E88D-44AF-ABD7-35943264AFAF");

    public static IReadOnlyCollection<Guid> All { get; } =
    [
        View,
        Create,
        Set,
        Update,
        Delete,
        Assign,
        Assigned,
        Reset,
        Change
    ];
}
