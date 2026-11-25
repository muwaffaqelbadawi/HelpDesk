using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Settings.Admin.Companies.Get;

public sealed record GetAllCompaniesResponse(
    IReadOnlyCollection<SeedData> Companies);
