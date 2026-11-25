using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Admin.Branches.Get;

public sealed class GetAllBranchesHandler(
    IUserContext userContext,
    IUserReader userReader,
    ILogger<GetAllBranchesHandler> logger)
        : IQueryHandler<GetAllBranchesResponse>
{
    public async Task<GetAllBranchesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        var branches = await userReader
            .GetAllActiveBranchesAsync(
                cancellationToken);

        logger.LogInformation("All branches retrieved successfully by user: {userId}",
            userId);

        return new GetAllBranchesResponse(branches);
    }
}
