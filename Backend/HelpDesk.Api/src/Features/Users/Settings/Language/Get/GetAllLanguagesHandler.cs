using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.Settings.Language.Get;

public sealed class GetAllLanguagesHandler(
    IUserReader userReader,
    IUserContext userContext,
    ILogger<GetAllLanguagesHandler> logger)
        : IQueryHandler<GetAllLanguagesResponse>
{
    public async Task<GetAllLanguagesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        var languageNames = await userReader
            .GetAllActiveLanguagesAsync(
                cancellationToken);

        logger.LogInformation("All languages retrieved successfully by user: {userId}",
            userId);

        return new GetAllLanguagesResponse(languageNames);
    }
}
