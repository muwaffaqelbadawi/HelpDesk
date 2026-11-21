namespace HelpDesk.src.Features.Users.Settings.TimeZones.Get;

public sealed record GetAllTimeZonesResponse(
    IReadOnlyCollection<string> TimeZones);
