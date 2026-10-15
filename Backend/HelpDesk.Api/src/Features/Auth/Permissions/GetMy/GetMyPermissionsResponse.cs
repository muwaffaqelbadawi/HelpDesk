namespace HelpDesk.src.Features.Auth.Permissions.GetMy;

public sealed record class GetMyPermissionsResponse(
    IReadOnlyCollection<string> Permissions);
