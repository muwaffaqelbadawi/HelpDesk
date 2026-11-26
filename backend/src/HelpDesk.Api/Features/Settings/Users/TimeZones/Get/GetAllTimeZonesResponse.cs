using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Settings.Users.TimeZones.Get;

public sealed record GetAllTimeZonesResponse(
    IReadOnlyCollection<SeedData> TimeZones);
