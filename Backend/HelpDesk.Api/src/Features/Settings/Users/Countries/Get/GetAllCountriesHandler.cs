using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Users.Countries.Get;

public sealed class SetCountriesHandler(
    IUserContext userContext,
    IUserReader userReader,
    ILogger<SetCountriesHandler> logger)
        : IQueryHandler<GetAllCountriesResponse>
{
    public async Task<GetAllCountriesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        var countries = await userReader
            .GetAllActiveCountriesAsync(
                cancellationToken);

        logger.LogInformation("All countries retrieved successfully by user: {userId}",
            userId);

        return new GetAllCountriesResponse(countries);
    }
}
