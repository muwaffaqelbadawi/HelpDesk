namespace HelpDesk.src.Features.Settings.Admin.Permissions.GetMy;

public sealed record GetMyPermissionsResponse(
    IReadOnlyCollection<string> Permissions);
