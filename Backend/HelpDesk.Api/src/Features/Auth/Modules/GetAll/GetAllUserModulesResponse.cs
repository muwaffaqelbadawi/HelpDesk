namespace HelpDesk.src.Features.Auth.Modules.GetAll;

public sealed record GetAllUserModulesResponse(
    IReadOnlyCollection<string> Modules);
