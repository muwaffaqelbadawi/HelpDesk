using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.Permissions;

public static class PermissionsLookup
{
    public static IReadOnlyCollection<LookupSeed> Permissions { get; } =
    [
        new(
            Id: PermissionIds.View,
            Name: "View",
            Code: "VIEW"),

        new(
            Id: PermissionIds.Create,
            Name: "Create",
            Code: "CREATE"),

        new(
            Id: PermissionIds.Set,
            Name: "Set",
            Code: "SET"),

        new(
            Id: PermissionIds.Update,
            Name: "Update",
            Code: "UPDATE"),

        new(
            Id: PermissionIds.Delete,
            Name: "Delete",
            Code: "DELETE"),

        new(
            Id: PermissionIds.Assign,
            Name: "Assign",
            Code: "ASSIGN"),

        new(
            Id: PermissionIds.Assigned,
            Name: "Assigned",
            Code: "ASSIGNED"),

        new(
            Id: PermissionIds.Reset,
            Name: "Reset",
            Code: "RESET"),

        new(
            Id: PermissionIds.Change,
            Name: "Change",
            Code: "CHANGE"),
    ];
}
