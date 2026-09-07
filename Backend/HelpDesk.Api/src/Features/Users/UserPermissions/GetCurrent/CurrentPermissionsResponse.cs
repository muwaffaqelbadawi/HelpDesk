namespace HelpDesk.src.Features.Users.UserPermissions.GetCurrent;

public sealed record class CurrentPermissionsResponse(
    IReadOnlyCollection<string> Permissions);
