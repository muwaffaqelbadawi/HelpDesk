using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Settings.Users.Languages.Get;

public sealed record GetAllLanguagesResponse(
    IReadOnlyCollection<SeedData> Languages);
