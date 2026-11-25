namespace HelpDesk.src.Features.Settings.Admin.Modules.GetAll;

public sealed record GetAllUserModulesResponse(
    IReadOnlyCollection<string> Modules);
