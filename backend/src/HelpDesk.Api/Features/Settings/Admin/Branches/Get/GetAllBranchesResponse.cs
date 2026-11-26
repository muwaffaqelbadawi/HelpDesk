using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Settings.Admin.Branches.Get;

public sealed record GetAllBranchesResponse(
    IReadOnlyCollection<SeedData> Branches);
