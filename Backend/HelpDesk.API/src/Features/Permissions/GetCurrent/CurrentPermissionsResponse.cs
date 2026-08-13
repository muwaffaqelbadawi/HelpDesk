namespace HelpDesk.src.Features.Permissions.GetCurrent;

public sealed record class CurrentPermissionsResponse(
    IReadOnlyCollection<string> Permissions);
