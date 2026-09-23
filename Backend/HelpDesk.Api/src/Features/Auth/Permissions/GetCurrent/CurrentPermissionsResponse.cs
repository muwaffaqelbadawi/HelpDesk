namespace HelpDesk.src.Features.Auth.Permissions.GetCurrent;

public sealed record class CurrentPermissionsResponse(
    IReadOnlyCollection<string> Permissions);
