using HelpDesk.Features.Settings.Users.Languages.Get;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Users.TimeZones.Get;

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

        var timeZones = await userReader
            .GetAllActiveTimeZonesAsync(
                cancellationToken);

        logger.LogInformation("All TimeZones retrieved successfully by user: {userId}",
            userId);

        return new GetAllTimeZonesResponse(timeZones);
    }
}
