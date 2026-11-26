using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Companies.Get;

public sealed class GetAllCompaniesHandler(
    IUserContext userContext,
    IUserReader userReader,
    ILogger<GetAllCompaniesHandler> logger)
        : IQueryHandler<GetAllCompaniesResponse>
{
    public async Task<GetAllCompaniesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        var companies = await userReader
            .GetAllActiveCompaniesAsync(
                cancellationToken);

        logger.LogInformation("All companies retrieved successfully by user: {userId}",
            userId);

        return new GetAllCompaniesResponse(companies);
    }
}
