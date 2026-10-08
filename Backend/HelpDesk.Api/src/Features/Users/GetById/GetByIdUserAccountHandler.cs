using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.GetById;

public sealed class GetByIdUserAccountHandler(
    IUserReader userReader,
    ILogger<GetByIdUserAccountHandler> logger)
        : IQueryHandler<GetByIdUserAccountQuery, GetByIdUserAccountResponse>
{
    public async Task<GetByIdUserAccountResponse> HandleAsync(
        GetByIdUserAccountQuery query,
        CancellationToken cancellationToken)
    {
        var userId = query.UserId;

        var user = await userReader.GetByIdAsync(
            userId,
            cancellationToken);

        // Successful log
        logger.LogInformation("User {user} data retrieved",
            userId);

        return new GetByIdUserAccountResponse(user);
    }
}
