using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Settings.Users.Countries.Get;

public sealed record GetAllCountriesResponse(
    IReadOnlyCollection<SeedData> Countries);
