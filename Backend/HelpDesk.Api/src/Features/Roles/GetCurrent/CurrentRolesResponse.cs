namespace HelpDesk.src.Features.Roles.GetCurrent;

public sealed record CurrentRolesResponse(
    IReadOnlyCollection<string> Roles);
