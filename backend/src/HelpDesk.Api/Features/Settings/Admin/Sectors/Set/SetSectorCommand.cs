namespace HelpDesk.Features.Settings.Admin.Sectors.Set;

public sealed record SetSectorCommand(
    Guid UserId,
    Guid SectorId);