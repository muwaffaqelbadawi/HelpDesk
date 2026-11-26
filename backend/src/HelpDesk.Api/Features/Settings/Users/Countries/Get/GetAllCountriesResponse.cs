using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Settings.Users.Countries.Get;

public sealed record GetAllCountriesResponse(
    IReadOnlyCollection<SeedData> Countries);
