using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Settings.Users.Languages.Get;

public sealed record GetAllLanguagesResponse(
    IReadOnlyCollection<SeedData> Languages);
