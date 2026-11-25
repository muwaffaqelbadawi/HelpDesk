using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Settings.Users.TimeZones.Get;

public sealed record GetAllTimeZonesResponse(
    IReadOnlyCollection<SeedData> TimeZones);
