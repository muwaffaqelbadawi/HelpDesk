using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Settings.Admin.Sectors.Get;

public sealed record GetAllSectorsResponse(
    IReadOnlyCollection<SeedData> Sectors);
