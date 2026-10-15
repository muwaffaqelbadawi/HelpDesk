using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Permissions.GetAll;

public sealed class GetAllUserPermissionsHandler(
    IPermissionsReader permissionsReader,
    ILogger<GetAllUserPermissionsHandler> logger)
        : IQueryHandler<GetAllUserPermissionsQuery, GetAllUserPermissionsResponse>
{
    public async Task<GetAllUserPermissionsResponse> HandleAsync(
        GetAllUserPermissionsQuery query,
        CancellationToken cancellationToken)
    {
        var userId = query.UserId;

        var permissions = await permissionsReader.GetUserPermissionsAsync(
            userId,
            cancellationToken);

        // Successful log
        logger.LogInformation("User {user} permissions retrieved successfully",
            userId);

        return new GetAllUserPermissionsResponse(permissions);
    }
}
