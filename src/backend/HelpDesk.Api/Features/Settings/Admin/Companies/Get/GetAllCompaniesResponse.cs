using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Settings.Admin.Companies.Get;

public sealed record GetAllCompaniesResponse(
    IReadOnlyCollection<SeedData> Companies);
