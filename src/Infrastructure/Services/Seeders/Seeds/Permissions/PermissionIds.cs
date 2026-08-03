namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Permissions;

public static class PermissionIds
{
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

    public static readonly Guid Submit =
        new("0211F5C2-E811-47CC-9618-FCFD68312A34");

    public static readonly Guid Reject =
        new("141CAEBD-0997-4D97-AC9D-DCB34916A585");

    public static readonly Guid Approve =
        new("9FE4A2D4-06E6-4C6F-A136-E46CE85E362D");

    public static IReadOnlyCollection<Guid> All { get; } =
    [
        View,
        Create,
        Update,
        Delete,
        Assign,
        Submit,
        Reject,
        Approve
    ];
}
