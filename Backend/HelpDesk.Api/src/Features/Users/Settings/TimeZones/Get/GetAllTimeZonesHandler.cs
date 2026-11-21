using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.Settings.TimeZones.Get;

public sealed class GetAllTimeZonesHandler(IUserReader userReader)
        : IQueryHandler<GetAllTimeZonesResponse>
{
    public async Task<GetAllTimeZonesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var timeZoneNames = await userReader
            .GetAllActiveTimeZonesAsync(
                cancellationToken);

        return new GetAllTimeZonesResponse(timeZoneNames);
    }
}
