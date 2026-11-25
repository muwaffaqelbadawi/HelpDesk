namespace HelpDesk.src.Features.Settings.Admin.Modules.GetMy;

public sealed record GetMyModulesResponse(
    IReadOnlyCollection<string> Modules);
