namespace HelpDesk.src.Features.Users.UserModules.GetCurrent;

public sealed record class CurrentModulesResponse(
    IReadOnlyCollection<string> Modules);
