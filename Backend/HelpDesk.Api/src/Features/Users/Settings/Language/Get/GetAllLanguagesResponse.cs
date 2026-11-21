namespace HelpDesk.src.Features.Users.Settings.Language.Get;

public sealed record GetAllLanguagesResponse(
    IReadOnlyCollection<string> Languages);
