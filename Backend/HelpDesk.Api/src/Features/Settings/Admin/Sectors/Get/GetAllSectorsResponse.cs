using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Settings.Admin.Sectors.Get;

public sealed record GetAllSectorsResponse(
    IReadOnlyCollection<SeedData> Sectors);
