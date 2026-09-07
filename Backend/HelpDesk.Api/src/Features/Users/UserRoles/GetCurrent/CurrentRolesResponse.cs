namespace HelpDesk.src.Features.Users.UserRoles.GetCurrent;

public sealed record CurrentRolesResponse(
    IReadOnlyCollection<string> Roles);
