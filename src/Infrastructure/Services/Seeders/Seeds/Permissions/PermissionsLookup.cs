using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Permissions;

public static class PermissionsLookup
{
    public static IReadOnlyCollection<LookupSeed> Permissions { get; } =
    [
        new(
            Id: PermissionIds.View,
            Name: "View",
            Code: "VIEW",
            SortOrder: 0),

        new(
            Id: PermissionIds.Create,
            Name: "Create",
            Code: "CREATE",
            SortOrder: 1),

        new(
            Id: PermissionIds.Update,
            Name: "Update",
            Code: "UPDATE",
            SortOrder: 2),

        new(
            Id: PermissionIds.Delete,
            Name: "Delete",
            Code: "DELETE",
            SortOrder: 3),

        new(
            Id: PermissionIds.Assign,
            Name: "Assign",
            Code: "ASSIGN",
            SortOrder: 4),

        new(
            Id: PermissionIds.Submit,
            Name: "Submit",
            Code: "SUBMIT",
            SortOrder: 5),

        new(
            Id: PermissionIds.Reject,
            Name: "Reject",
            Code: "REJECT",
            SortOrder: 6),

        new(
            Id: PermissionIds.Approve,
            Name: "Approve",
            Code: "APPROVE",
            SortOrder: 7)
    ];
}
