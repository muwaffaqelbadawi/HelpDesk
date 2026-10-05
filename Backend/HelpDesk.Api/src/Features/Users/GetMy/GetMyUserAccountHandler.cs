using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.GetMy;

public sealed class GetMyUserAccountHandler(
    IUserContext userContext,
    IUserReader userReader,
    ILogger<GetMyUserAccountHandler> logger)
        : IQueryHandler<GetMyUserAccountResponse>
{
    public async Task<GetMyUserAccountResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.GuidUserId;

        var user = await userReader.GetByIdAsync(
            userId,
            cancellationToken);

        // Saucerful log
        logger.LogInformation(
            "User {UserId} retrieved their own account information.",
            userId);

        return new GetMyUserAccountResponse(user);
    }
}
