namespace HelpDesk.src.Features.Auth.Modules.GetMy;

public sealed record class GetMyModulesResponse(
    IReadOnlyCollection<string> Modules);
