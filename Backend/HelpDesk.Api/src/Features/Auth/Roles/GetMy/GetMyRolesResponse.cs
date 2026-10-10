namespace HelpDesk.src.Features.Auth.Roles.GetMy;

public sealed record GetMyRolesResponse(
    IReadOnlyCollection<string> Roles);
