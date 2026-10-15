namespace HelpDesk.src.Features.Auth.Permissions.GetAll;

public sealed record GetAllUserPermissionsResponse(
    IReadOnlyCollection<string> Permissions);
