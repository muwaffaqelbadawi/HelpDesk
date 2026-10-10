using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Roles.GetMy;

public sealed class GetMyRolesHandler(
    IUserContext userContext,
    IRolesReader roleReader,
    ILogger<GetMyRolesHandler> logger)
        : IQueryHandler<GetMyRolesResponse>
{
    public async Task<GetMyRolesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.GuidUserId;

        var roles = await roleReader.GetUserRolesAsync(
            userId,
            cancellationToken);

        // Successful log
        logger.LogInformation("User {user} roles retrieved",
            userId);

        return new GetMyRolesResponse(roles);
    }
}
