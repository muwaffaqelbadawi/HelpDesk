namespace HelpDesk.src.Features.Modules.GetCurrent;

public sealed record class CurrentModulesResponse(
    IReadOnlyCollection<string> Modules);
