using HelpDesk.src.Features.Users.Settings.Language.Get;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.Settings.TimeZones.Get;

public sealed class GetAllTimeZonesHandler(
    IUserReader userReader,
    IUserContext userContext,
    ILogger<GetAllLanguagesHandler> logger)
        : IQueryHandler<GetAllTimeZonesResponse>
{
    public async Task<GetAllTimeZonesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        var timeZoneNames = await userReader
            .GetAllActiveTimeZonesAsync(
                cancellationToken);

        logger.LogInformation("All TimeZones retrieved successfully by user: {userId}",
            userId);

        return new GetAllTimeZonesResponse(timeZoneNames);
    }
}
