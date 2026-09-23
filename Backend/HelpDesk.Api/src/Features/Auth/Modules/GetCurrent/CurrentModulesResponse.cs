namespace HelpDesk.src.Features.Auth.Modules.GetCurrent;

public sealed record class CurrentModulesResponse(
    IReadOnlyCollection<string> Modules);
