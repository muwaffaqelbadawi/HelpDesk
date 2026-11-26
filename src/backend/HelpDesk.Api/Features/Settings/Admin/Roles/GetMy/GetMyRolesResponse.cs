namespace HelpDesk.Features.Settings.Admin.Roles.GetMy;

public sealed record GetMyRolesResponse(
    IReadOnlyCollection<string> Roles);
