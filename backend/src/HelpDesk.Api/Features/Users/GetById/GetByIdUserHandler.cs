using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Users.GetById;

public sealed class GetByIdUserHandler(
    IUserReader userReader,
    ILogger<GetByIdUserHandler> logger)
        : IQueryHandler<GetByIdUserQuery, GetByIdUserResponse>
{
    public async Task<GetByIdUserResponse> HandleAsync(
        GetByIdUserQuery query,
        CancellationToken cancellationToken)
    {
        var userId = query.UserId;

        var user = await userReader.GetByIdAsync(
            userId,
            cancellationToken);

        // Successful log
        logger.LogInformation("User {user} data retrieved",
            userId);

        return new GetByIdUserResponse(user);
    }
}
