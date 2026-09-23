namespace HelpDesk.src.Features.Auth.Roles.GetCurrent;

public sealed record CurrentRolesResponse(
    IReadOnlyCollection<string> Roles);
