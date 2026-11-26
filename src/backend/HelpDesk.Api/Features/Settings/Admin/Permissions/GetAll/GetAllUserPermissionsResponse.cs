namespace HelpDesk.Features.Settings.Admin.Permissions.GetAll;

public sealed record GetAllUserPermissionsResponse(
    IReadOnlyCollection<string> Permissions);
