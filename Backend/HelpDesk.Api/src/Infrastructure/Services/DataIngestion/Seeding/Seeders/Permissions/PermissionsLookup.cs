using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Permissions;

public static class PermissionsLookup
{
    // 5 permissions

    public static IReadOnlyCollection<LookupSeed> Permissions { get; } =
    [
        new(
            Id: PermissionIds.View,
            Name: "View",
            Code: "VIEW",
            SortOrder: 1),

        new(
            Id: PermissionIds.Create,
            Name: "Create",
            Code: "CREATE",
            SortOrder: 2),

        new(
            Id: PermissionIds.Update,
            Name: "Update",
            Code: "UPDATE",
            SortOrder: 3),

        new(
            Id: PermissionIds.Delete,
            Name: "Delete",
            Code: "DELETE",
            SortOrder: 4),

        new(
            Id: PermissionIds.Assign,
            Name: "Assign",
            Code: "ASSIGN",
            SortOrder: 5),
    ];
}
