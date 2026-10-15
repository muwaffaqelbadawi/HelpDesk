using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Permissions.GetMy;

public sealed class GetMyPermissionsHandler(
    IUserContext userContext,
    IPermissionsReader permissionsReader,
    ILogger<GetMyPermissionsHandler> logger)
        : IQueryHandler<GetMyPermissionsResponse>
{
    public async Task<GetMyPermissionsResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.GuidUserId;

        var permissions = await permissionsReader.GetUserPermissionsAsync(
            userId,
            cancellationToken);

        // Successful log
        logger.LogInformation("User {user} permissions retrieved successfully",
            userId);

        return new GetMyPermissionsResponse(permissions);
    }
}
