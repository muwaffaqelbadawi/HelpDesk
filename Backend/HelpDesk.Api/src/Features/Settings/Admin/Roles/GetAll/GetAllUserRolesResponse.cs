namespace HelpDesk.src.Features.Settings.Admin.Roles.GetAll;

public sealed record GetAllUserRolesResponse(
    IReadOnlyCollection<string> Roles);
