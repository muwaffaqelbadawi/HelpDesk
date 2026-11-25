using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Settings.Admin.Branches.Get;

public sealed record GetAllBranchesResponse(
    IReadOnlyCollection<SeedData> Branches);
